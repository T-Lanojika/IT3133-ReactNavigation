import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const authenticate = () => {
        // Hardcoded credentials for demonstration
        const validUsername = "admin";
        const validPassword = "1234";

        if (username === validUsername && password === validPassword) {
            navigate("/dash");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h1>Login</h1>
            <form>
                <label>Username: </label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    style={{ display: "block", marginBottom: "10px" }}
                />
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ display: "block", marginBottom: "10px" }}
                />
            </form>
            <button onClick={authenticate} style={{ marginTop: "10px" }}>
                Login
            </button>
        </div>
    );
}
