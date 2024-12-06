"use client"
import { useState } from "react"
import './style.css'
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      router.push("/dashboard");
    } catch (error){
      alert("Credenciais invalidas!")
    }
  };
  return (
    <div className="container-login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form-login">
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Senha"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

