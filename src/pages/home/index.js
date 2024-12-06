"use client"
import Navbar from "@/components/navbar/Navbar";
import Login from "@/pages/login/Login";
import './style.css'
export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="home">
                    <h1>Home</h1>
                </div>
                <div className="container-login">
                    <Login />
                </div>
            </div>
        </>

    )
}