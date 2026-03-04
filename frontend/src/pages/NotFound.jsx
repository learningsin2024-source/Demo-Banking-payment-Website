import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-blue-600">404</h1>
            <p className="text-gray-500 mt-4 mb-6">Oops! Page not found.</p>
            <Link to="/" className="text-blue-600 hover:underline text-sm">
                ← Back to Login
            </Link>
        </div>
    );
};

export default NotFound;
