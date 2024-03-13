import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api.js";

export default function Login() {
    const [loginFormData, setFormData] = useState({
        email: "",
        password: "",
    });

    const location = useLocation();
    console.log(location);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const from = location.state?.from.pathname || "";

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");

        loginUser(loginFormData)
            .then((data) => {
                console.log(data);
                setError(null);
                localStorage.setItem("loggedin", true);
                navigate(from, { replace: true });
            })
            .catch((err) => setError(err))
            .finally(() => {
                setStatus("idle");
            });
    }

    return (
        <div className="login-container">
            {location.state?.message && (
                <h3 className="login-first">{location.state.message}</h3>
            )}
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="login-first">{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    );
}
