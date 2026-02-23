import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getUser } from "../services/auth";

function ProtectedRoute() {
    const [loading, SetLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        const checkauth = async () => {
            try {
                const user = await getUser();

                if (user) {
                    setAuthenticated(true);
                    nav("/Dashbaord");
                } else {
                    nav("/login");
                }
            } catch (error) {
                nav("/login");
            } finally {
                SetLoading(false);
            }
        };

        checkauth();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
}

export default ProtectedRoute;
