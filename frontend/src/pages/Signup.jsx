import { useContext, useState, useEffect } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { AuthContext } from "../Context/Authcontext";
import AuthLayout from "../layout/AuthLayout";

import { useNavigate } from "react-router-dom";

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
            await registerUser({ name, email, password }); // wait for Laravel
            navigate("/");
        } catch (err) {
            console.log(err.response?.status, err.response?.data);
            setError(err.response?.data?.message || "invalid credentials");
        }
    };

    return (
        <>
            <AuthLayout logo="" title="Signup To Get Started">
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
                        type="text"
                        placeholder="Input Your Username"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Input Your Password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" disabled={loading}>
                        {loading ? "signing in..." : "SignIn Now"}
                    </Button>
                </form>
            </AuthLayout>
        </>
    );
};

export default Signup;
