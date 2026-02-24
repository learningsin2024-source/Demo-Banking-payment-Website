import { useState } from "react";

import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
