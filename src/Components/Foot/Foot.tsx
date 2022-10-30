
import { Link } from "react-router-dom";
import "./Foot.css";
 import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
 import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
 import PersonAddIcon from '@mui/icons-material/PersonAdd';
 import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
 import TwitterIcon from '@mui/icons-material/Twitter';
 import PlaceIcon from '@mui/icons-material/Place';
 import InstagramIcon from '@mui/icons-material/Instagram';
 import YouTubeIcon from '@mui/icons-material/YouTube';
function Foot(): JSX.Element {
    return (
        <div className="Foot">
           
            <br></br>
            <ul>
                <Link to='/' className="foot" >
                 <a href="https://twitter.com/">  <TwitterIcon></TwitterIcon> </a> 
                   

                </Link>

                <Link to='/loginpatient' className="foot" >
                  <a href="https://g.page/chasdeiamram?share/"> <PlaceIcon></PlaceIcon></a> 
                   

                </Link>
                <Link to='/logindoctor' className="foot"  >
                    <a href="https://www.instagram.com/"><InstagramIcon></InstagramIcon></a> 
                   

                </Link>
                
                <Link to='' className="foot"  >
                  <a href="https://www.youtube.com/watch?v=WTir35FhixA"> <YouTubeIcon></YouTubeIcon></a>  
                   

                </Link>
               
              
               
               
            </ul>
        </div >
    );
}

export default Foot;