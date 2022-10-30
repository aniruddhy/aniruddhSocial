import "./closefriends.css";
export default function  Closefriends({user}){
return(
    <li className="sidebarFriend">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{user.userName}</span>
            </li>
    );
}