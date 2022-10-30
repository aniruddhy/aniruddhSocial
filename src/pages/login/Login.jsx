import "./login.css";
export default function Login(){
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">AniruddhSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world arround you on AniSocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input placeholder="Enter Your Email " type="Email" className="loginInput" />
                    <input placeholder="Enter Your Password" type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password ?</span>
                     <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
        );
}