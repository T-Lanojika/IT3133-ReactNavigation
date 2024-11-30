import { NavLink } from "react-router-dom";
import "../css/styles.css";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <nav>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/dash">Dashboard</NavLink>
            </nav>
            <h1>Welcome to the Dashboard!</h1>

        </div>
    );
}
