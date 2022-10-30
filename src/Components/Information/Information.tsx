import { TextField } from "@material-ui/core";
import * as React from 'react';
import { Button, makeStyles, OutlinedInput, Typography, Theme } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import AbcSharpIcon from '@mui/icons-material/AbcSharp';
import { ClassNames } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { blue } from '@material-ui/core/colors';
import { Opacity } from '@material-ui/icons';

import { clear } from 'console';
import LoginDoctor from '../Login/LoginDoctor';
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



import "../Information/Information.css";
import { Bolt } from "@mui/icons-material";
function Information(): JSX.Element {
    return (
        <div className="Information">
			<p  >
                    <br></br>
                   <b> מה עליך לעשות?</b>
                    <br/>
                    <br/>
עליך להגיש בקשה לאישפוז ביתי באזור האישי שלך לאחר הרשמות לאתר.
<br/> הפניה מועברת אוטומטית לצוות מתאם אשפוז בית.<br/>
נציגי השירות יצרו עמך קשר תוך שעתיים מקבלת ההפנייה <br/> וצוות אשפוז בית יגיע אליך לבדיקה תוך 2-4 שעות מקליטת ההפנייה,<br></br>במידה ואין רופא פנוי,הפניה מועברת למשמרת הבאה.
                </p>
                <Link to="/Loginpatient">
                    <Button id="button"variant="contained" type='submit'
                        color="primary"//***********איך גורמים שבלחיצה על שליחה, יעורר את הפעולה שנמצאת בפרוגרס */
                       >
                    להרשמה לחץ כאן
                    </Button>
                </Link>
        </div>
    );

}

export default Information;