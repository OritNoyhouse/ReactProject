
import { List, ListItemIcon, ListItemText, TextField } from "@material-ui/core";
import * as React from 'react';
import { Button, makeStyles, OutlinedInput, Typography, Theme } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
// import { palette } from '@mui/system';
import AbcSharpIcon from '@mui/icons-material/AbcSharp';
import { ClassNames } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { blue } from '@material-ui/core/colors';
import { Opacity } from '@material-ui/icons';

import { clear } from 'console';
import axios from "axios";
import { useForm } from "react-hook-form";
import ManagerClass from "../Manager/ManagerClass";
import { Link, useParams } from "react-router-dom";
import { AnyARecord } from "node:dns";
// import './ShortestRoute.css';
// import showRoutes from "/Users/user1/Desktop/פרויקט גמר/react/project/src/Components/Login/showRouts"
import { ListItemButton, Tabs } from "@mui/material";
import showRouts from "../Login/showRouts";
// Components/Home/Login/showRoutes";


function RouteS(props:any): JSX.Element {
   
    let myRoute = props.myRoute as showRouts[];
    console.log(myRoute);

      
    // }
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return <div className='header'>

    <div className='header'> רשימת הכתובות למסלול במשמרת הקרובה  </div>
         <h4>   {date} לתאריך </h4>
    
    <form className='LogIn'>
    
        <Tabs orientation="vertical">
            <List component="nav" aria-label="mailbox folders">
                {myRoute.map(s =>
                    <ListItemButton divider>
                       
                        <ListItemText primary={`  כתובת: ${s.street} מספר בניין: ${s.numOfBulding} עיר:${s.city}   `} style={{ textAlign: "right" }}></ListItemText>
                        
                    </ListItemButton>
                )}
            </List>
        </Tabs> 

        <br>
        </br>
               <h1>המסלול המהיר למשמרת הקרובה</h1>
               <iframe  src="https://goo.gl/maps/a3H51Z8dMicKfCDk6" width="600" height="450" loading="lazy"></iframe>
          


</form> 

    </div>

                }
export default RouteS;