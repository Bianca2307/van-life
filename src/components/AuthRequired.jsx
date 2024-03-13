import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
    const isloggedIn = localStorage.getItem("loggedin");
    console.log(isloggedIn);
    const location = useLocation()

    if (!isloggedIn) {
        return (
            <Navigate
                to="/login"
                state={{ message: "You must log in first", from:location}}
                replace
            />
        );
    }

    return <Outlet />;
}
