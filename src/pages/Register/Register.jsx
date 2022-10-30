import "./register.css";
export default function Register(){
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
                    <input placeholder="UserName" type="Text" className="loginInput" />
                    <input placeholder="Enter Your Email" type="Email" className="loginInput" />
                    <input placeholder="Password" type="Password" className="loginInput" />
                    <input placeholder="Confirm Password" type="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                     <button className="loginRegisterButton"> Account</button>
                    </div>
                </div>
            </div>
        </div>
        );
}