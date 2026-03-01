import { useContext } from "react";
import { AuthContext } from "../../Context/Authcontext";
import { Link, useLocation } from "react-router";
import Button from "./Button";

const navLinks = [
    { label: "Overview", path: "/dashboard" },
    { label: "Transactions", path: "/dashboard/transactions" },
    { label: "Transfer", path: "/dashboard/transfer" },
    { label: "Top Up", path: "/dashboard/topup" },
];

const Sidebar = () => {
    const { user, logout, loading } = useContext(AuthContext);
    const location = useLocation();

    return (
        <aside className="h-screen w-64 flex flex-col bg-white border-r border-gray-200 p-6 shadow-sm">
            {/* Logo */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-blue-600">💳 BankApp</h2>
                <p className="text-xs text-gray-400 mt-1">Personal Banking</p>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            location.pathname === link.path
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* User & Logout */}
            <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800">
                            {user?.name}
                        </p>
                        <p className="text-xs text-gray-400">{user?.email}</p>
                    </div>
                </div>
                <Button onClick={logout} className="w-full" disabled={loading}>
                    {loading ? (
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    ) : (
                        "LogOut"
                    )}
                </Button>
            </div>
        </aside>
    );
};

export default Sidebar;
