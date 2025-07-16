// src/components/SignIn.tsx
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem", background: "#333", color: "#fff", border: "none" }}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
