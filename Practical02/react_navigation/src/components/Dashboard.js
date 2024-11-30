import { NavLink } from "react-router-dom";

export default function Dashboard() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome to the Dashboard!</h1>
            <nav>
                <NavLink to="/" style={{ marginRight: "10px" }}>
                    Login
                </NavLink>
                <NavLink to="/dash">Dashboard</NavLink>
            </nav>
        </div>
    );
}
