import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, isAuthenticated, logout, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const handlelogout = async () => {
        await logout();
        navigate("/login");
    };

    if (loading) return null;

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <div className="">
                        <h2 className="text-xl font-bold text-blue-600">
                            💳 BankApp
                        </h2>
                        <p className="text-xs text-gray-400 mt-1">
                            Personal Banking
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6 text-sm font-medium">
                        {!user ? (
                            <>
                                {/* About Link */}
                                <Link
                                    to="/about"
                                    className=" font-medium  text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    About
                                </Link>
                                {currentPath !== "/login" && (
                                    <Link to="/login">
                                        <Button>Login</Button>
                                    </Link>
                                )}

                                {currentPath !== "/signup" && (
                                    <Link to="/signup">
                                        <Button>SignUp</Button>
                                    </Link>
                                )}
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

                                <Button
                                    variant="secondary"
                                    onClick={handlelogout}
                                >
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
