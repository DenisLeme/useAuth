"use client"
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const login = async (email, password) => {
        if (email === "test@example.com" && password === "123456") {
            setUser({ name: "test", email });
            router.push("/dashboard");        } else {
            throw new Error("Invalid login");
        }
    };

    const logout = () => {
        setUser(null);
        router.push("/home");     };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
    }
    return context;
}