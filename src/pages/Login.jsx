import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = (e) => {

        e.preventDefault();

        if (username === "admin" && password === "admin") {

            navigate("/");

        } else {

            setError("Invalid Username or Password");

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <div className="logo">

                    🛍️

                </div>

                <h1>Welcome Back</h1>

                <p>Login to continue shopping</p>

                <form onSubmit={login}>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <div className="error">{error}</div>}

                    <button>

                        Login

                    </button>

                </form>

                <div className="demo">

                    Demo Login

                    <br />

                    <strong>admin / admin</strong>

                </div>

            </div>

        </div>

    );

}

export default Login;