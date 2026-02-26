import { createContext, useEffect, useState } from "react";
import {
    login as apiLogin,
    getUser,
    logout as apilogOut,
} from "../services/auth.js";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, SetLoading] = useState(false);

    const login = async (Credentials) => {
        SetLoading(true);

        try {
            const userdata = await apiLogin(Credentials);

            setUser(userdata);
            setIsAuthenticated(true);
        } catch (error) {
            throw error;
        } finally {
            SetLoading(false);
        }
    };

    const logout = async () => {
        try {
            await apilogOut();
        } catch (error) {
            console.log(error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            localStorage.removeItem("token"); // clear token here as safety net
        }
    };
    const checkAuth = async (params) => {
        SetLoading(true);
        try {
            const checkuser = await getUser();
            setIsAuthenticated(true);
            setUser(checkuser);
        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            SetLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const value = {
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        checkAuth,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
