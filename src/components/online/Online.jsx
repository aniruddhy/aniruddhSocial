import "./online.css";
export default function Online({user}){
return(
    <div>
        <li className="rightbarFriend">
                    <div className="rightbarProfileImageContainer">
                        <img src={user.profilePicture} alt=""
                         className="rightbarProfileImg"
                          />
                          <span className="rightbarOnline"></span>
                    </div> 
                    <span className="rightbarUserName">{user.userName}</span>
                </li>
    </div>
    )
}