import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/");
    }

    return <div className="container">
        <form className="login-form">
            <label for="title">
                <h1>Login</h1>
            </label>
            <input id="title" type="text" placeholder="Enter your username" required value={usernameText} onChange={(e) => setUsernameText(e.target.value)}/>
            <button className="login-btn">Login</button>
        </form>
    </div>
}

export default Login;