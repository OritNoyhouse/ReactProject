import "./Nav.css";
import { Link } from "react-router-dom";
import Logo2 from "../Home/Logo/Logo2";
 import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
 import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
 import PersonAddIcon from '@mui/icons-material/PersonAdd';
 import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
function Nav(): JSX.Element {
    return (
        <div className="Nav">
            <div className="Nav2"></div>
            <br></br>
            <ul>
                <Link to='/' className="nav-links">
                   
                    <li id="nav-links">עמוד הבית</li>

                </Link>

                <Link to='/loginpatient' className="nav-links">
                   
                    <li id="nav-links">אזור אישי לפציינט</li>

                </Link>
                <Link to='/logindoctor' className="nav-links" >
                    
                    <li id="nav-links">אזור אישי לרופא</li>

                </Link>
                
                <Link to='/manager' className="nav-links"   >
                    
                    <li id="nav-links">כניסת מנהל</li>

                </Link>
                <a href="/">  <Logo2></Logo2></a>
              
               
               
            </ul>
        </div >
    );
}

export default Nav;