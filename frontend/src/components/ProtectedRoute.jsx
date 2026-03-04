import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";

function ProtectedRoute() {
    const { loading, user } = useContext(AuthContext);

    if (loading)
        return (
            <>
                <div className="flex justify-center items-center h-screen">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </>
        );
    if (!user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;
