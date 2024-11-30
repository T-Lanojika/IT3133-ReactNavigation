import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/styles.css";

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
        const validUsername = "admin";
        const validPassword = "1234";

        if (username === validUsername && password === validPassword) {
            navigate("/dash");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        authenticate();
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}
