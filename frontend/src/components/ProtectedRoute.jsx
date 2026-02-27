import { useState, useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router";

import { AuthContext } from "../Context/Authcontext";

function ProtectedRoute() {
    const { loading, user } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;

    return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
