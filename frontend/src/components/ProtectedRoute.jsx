import { useState, useEffect, useContext } from "react";
import { useNavigate, Outlet } from "react-router";

import { AuthContext } from "../Context/Authcontext";

function ProtectedRoute() {
    const { loading, user } = useContext(AuthContext);
    const nav = useNavigate();

    if (loading)
        return (
            <>
                <div className="flex justify-center items-center h-screen">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </>
        );

    return user ? <Outlet /> : nav("/");
}

export default ProtectedRoute;
