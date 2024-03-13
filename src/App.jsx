import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import "./server";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
import HostVansInfo from "./pages/Host/HostVansInfo";
import HostVansPricing from "./pages/Host/HostVansPricing";
import HostVansPhotos from "./pages/Host/HostVansPhotos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthRequired from "./components/AuthRequired";

function App() {
    return (
        <div className="nav">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VanDetail />} />
                        <Route path="login" element={<Login />} />

                        <Route element={<AuthRequired />}>
                            <Route path="host" element={<HostLayout />}>
                                <Route index element={<Dashboard />} />
                                <Route path="income" element={<Income />} />
                                <Route path="reviews" element={<Reviews />} />
                                <Route path="vans" element={<HostVans />} />

                                <Route
                                    path="vans/:id"
                                    element={<HostVansDetail />}
                                >
                                    <Route index element={<HostVansInfo />} />
                                    <Route
                                        path="pricing"
                                        element={<HostVansPricing />}
                                    />
                                    <Route
                                        path="photos"
                                        element={<HostVansPhotos />}
                                    />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
