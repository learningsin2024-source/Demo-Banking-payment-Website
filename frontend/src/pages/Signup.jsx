import { useContext, useState, useEffect } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { AuthContext } from "../Context/Authcontext";
import AuthLayout from "../layout/AuthLayout";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Signup = () => {
    const { registerUser, loading, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {
            await registerUser({ name, email, password });
            navigate("/dashboard");
        } catch (err) {
            console.log(err.response?.status, err.response?.data);
            setError(err.response?.data?.message || "invalid credentials");
        }
    };

    return (
        <>
            <Navbar />
            <AuthLayout logo="" title="Signup To Get Started">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-2">{error}</p>}

                    <Input
                        type="text"
                        placeholder="Input Your Username"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            "SignIn Now"
                        )}
                    </Button>
                </form>
            </AuthLayout>
        </>
    );
};

export default Signup;
