import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import AuthLayout from "../layout/AuthLayout";
import Button from "../components/ui/Button";
import { AuthContext } from "../Context/Authcontext";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

function Login() {
    const { login, loading, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {
            await login({ email, password }); // wait for Laravel
            navigate("/dashboard"); // redirect on success
        } catch (err) {
            console.log(err.response?.status, err.response?.data);
            setError(err.response?.data?.message || "invalid credentials");
        }
    };

    return (
        <>
            <Navbar />
            <AuthLayout logo="" title="Login To Your Dashboard">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-2">{error}</p>}

                    <Input
                        type="email"
                        placeholder="Input Your Email"
                        label="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Input Your Password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" disabled={loading}>
                        {loading ? (
                            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            "Login Now"
                        )}
                    </Button>
                    <Link to="/signup" className="mt-3.5 underline">
                        <span>Doesn't have an account ? signup</span>
                    </Link>
                </form>
            </AuthLayout>
        </>
    );
}

export default Login;
