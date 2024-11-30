import "./App.css";
import "./css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dash" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
