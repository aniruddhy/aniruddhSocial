// import React from "react";
import './topbar.css';
import { Search , Person,Chat,Notifications} from '@mui/icons-material';


const Topbar=()=> {
    return(
 <div className='topbarcontainer'>
       <div className="topbarleft">
             <span className="logo">Aniruddh Social</span>
             </div>
        <div className="topbarCenter">  
            <div className="searchBar">
                  <Search className='searchlogo'/>
                  <input placeholder='search friends' className='inputbar' />
            </div>
         </div> 
       <div className="topbarRight">
          <div className="topbarlinks">
             <span className='topbarlink'>HomePage</span>
             <span className='topbarlink'>Timeline</span>
         </div>
          <div className="topbarIcons">
           <div className='topbarIconItem'>
            <Person />
        <span className="topbarIconBage">1</span>
        </div>

        <div className='topbarIconItem'>
            <Chat />
        <span className="topbarIconBage">2</span>
        </div>
        <div className='topbarIconItem'><Notifications />
        <span className="topbarIconBage">3</span>
        </div>
        </div>
     
     <div className="imageGround">
       <img src='/assets/Images/1.png' className='topbarImage'/>
       </div>
       </div>   </div>
    );
}
export default Topbar;