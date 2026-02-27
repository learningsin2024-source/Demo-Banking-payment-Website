import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import DashboardLayout from "./components/DashboardLayout";
import Transactions from "./pages/Transactions";
import Transfer from "./pages/Transfer";
import TopUp from "./pages/TopUp";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="transfer" element={<Transfer />} />
                    <Route path="topup" element={<TopUp />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
