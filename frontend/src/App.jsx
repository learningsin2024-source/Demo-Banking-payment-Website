import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const [count, setCount] = useState(0);

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
