import { Cake} from "@mui/icons-material";
import { Users } from "../../DummyData";
import Online from "../online/Online";
import "./rightbar.css";
function Rightbar({ profile }){

    const HomeRightBar=()=>{
        return(
            <>
            <div className="birthdayContainer">
                {/* <img src="" alt="" className="birthdayImage" />  */}
                <Cake className="birthdayImage" />
                <span className="birthdayText">
                    <b>Pola Foster </b>and<b> 3 other friends </b>have a birthday today</span>
            </div>
            <img src="/assets/Images/14.jpg" alt="ONE_GoupShip_Image" className="rightbarAdd" />
             <h4 className="rightbarAddTittle">Online Friends</h4>
              <ul className="righbarFriendList"> 

                {Users.map(u=>(
                <Online key={u.id} user={u} />
                ))}
    
             </ul>
            </>
            );
    }
 const ProfileRightBar =()=>{
   return(
    <>
<h4 className="rightbarTitle">User Information</h4>
   <div className="rightbarInfo">
    <div className="rightbarInfoItem">
     <span className="rightbarInfoKey">City:</span>
       <span className="rightbarInfoValue">Lucknow</span>
    </div>
    <div className="rightbarInfoItem">
     <span className="rightbarInfoKey">From:</span>
       <span className="rightbarInfoValue">Lakhimpur Kheri</span>
    </div>
    <div className="rightbarInfoItem">
     <span className="rightbarInfoKey">Relationship:</span>
       <span className="rightbarInfoValue">Single</span>
    </div> 
   </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
            <img src="/assets/Images/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightBarFollowingName">Aniruddh Yadav</span>
        </div>
        <div className="rightbarFollowing">
            <img src="/assets/Images/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightBarFollowingName">Aniruddh Yadav</span>
        </div>
        <div className="rightbarFollowing">
            <img src="/assets/Images/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightBarFollowingName">Aniruddh Yadav</span>
        </div>
        <div className="rightbarFollowing">
            <img src="/assets/Images/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightBarFollowingName">Aniruddh Yadav</span>
        </div>
        <div className="rightbarFollowing">
            <img src="/assets/Images/1.png" alt="" className="rightbarFollowingImg" />
            <span className="rightBarFollowingName">Aniruddh Yadav</span>
        </div>
        <div className="rightbarFollowing">
            <img src="/assets/Images/kar1.png" alt="" className="rightbarFollowingImg" />
            <span className="rightBarFollowingName">Aniruddh Yadav</span>
        </div>
        
        
      </div>
   </>
    )
}

return(
    <div className="rightbar">
        <div className="rightbarWrapper">
            {profile?<ProfileRightBar />:<HomeRightBar />}
        </div>
    </div>
    );
}
export default Rightbar;