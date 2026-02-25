import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";
import Button from "../components/ui/Button";

const Navbar = () => {
    const { user, isAuthenticated, logout, loading } = useContext(AuthContext);

    if (loading) return null;

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <Link
                        to="/"
                        className="text-2xl  bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                    >
                        Banking Website
                    </Link>

                    {/* Right Side */}
                    <div className="flex items-center gap-6 text-sm font-medium">
                        {!isAuthenticated ? (
                            <>
                                {/* About Link */}
                                <Link
                                    to="/about"
                                    className=" font-medium  text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    About
                                </Link>

                                <Link to="/login">
                                    <Button>Login</Button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    Dashboard
                                </Link>

                                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                                    <span className="text-gray-700">
                                        {user?.name}
                                    </span>
                                </div>

                                <Button variant="secondary" onClick={logout}>
                                    Logout
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
