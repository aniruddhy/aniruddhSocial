import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile(){
    return(
        <>
        <Topbar />
        <div className="profile">
         <Sidebar />
         <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="/assets/Images/kar1.png" alt="" className="profileCoverImg" />
                 <img src="/assets/Images/10.jpg" alt="" className="profileUserImg" />
                 </div>
            <div className="profileInfo">
                <h4 className="profileName">Aniruddh Kumar</h4>
                <span className="profileDesc">Full stack devloper</span>
                
            </div>
            </div>
            <div className="profileRightBottom">
            <Feed />
             <Rightbar profile />
            </div>
         </div>
        </div>
        </>
        )
}