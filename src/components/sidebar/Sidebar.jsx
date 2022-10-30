import {  Bookmarks, Chat, Groups, PlayCircle, RssFeed, Work, HelpOutline, School } from "@mui/icons-material";
import "./sidebar.css";
 import { Users } from "../../DummyData";
import Closefriends from "../closeFriends/Closefriends";
function Sidebar(){
return(
    <div className="sidebar">
        <div className="wrappersidebar">
         <ul className="sidebarListItems">
            <li className="sidebarlistItem">
                <RssFeed className="sidebarIcon" />
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarlistItem">
                <Chat className="sidebarIcon" />
                <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarlistItem">
                <PlayCircle className="sidebarIcon" />
                <span className="sidebarListItemText">Vedio</span>
            </li>
            <li className="sidebarlistItem">
                <Groups className="sidebarIcon" />
                <span className="sidebarListItemText">Group</span>
            </li>
            <li className="sidebarlistItem">
                <Bookmarks className="sidebarIcon" />
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarlistItem">
                <HelpOutline className="sidebarIcon" />
                <span className="sidebarListItemText">Question</span>
            </li>
            <li className="sidebarlistItem">
                <Work className="sidebarIcon" />
                <span className="sidebarListItemText">Job</span>
            </li>
            <li className="sidebarlistItem">
                <School className="sidebarIcon" />
                <span className="sidebarListItemText">Courses</span>
            </li>
         </ul>
         <button className="sidebarButton">ShowMore</button>
         <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            {
            Users.map(u=>(
                <Closefriends key={u.id} user={u} />
                ))
            }
          </ul>
        </div>
        </div>
    );
}
export default Sidebar;