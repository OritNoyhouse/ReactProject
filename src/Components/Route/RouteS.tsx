
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
               <iframe  src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d6761.436865441225!2d34.83776727721355!3d32.076863515714784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x151d4a3c2dba5169%3A0x5f63086614d1b79!2z16DXl9ee15nXlCAyNiwg15HXoNeZINeR16jXpw!3m2!1d32.078980699999995!2d34.8373663!4m5!1s0x151d4a38ebabe3e5%3A0x825ae0a263d9a68b!2z15fXlteV158g15DXmSLXqSA2Niwg15HXoNeZINeR16jXpywg15nXqdeo15DXnA!3m2!1d32.0762071!2d34.833248!4m5!1s0x151d4a37f9012361%3A0x4a80e1077f1cdac!2z15HXkNeo15kgMTcsINeR16DXmSDXkdeo16c!3m2!1d32.076540099999995!2d34.8291107!5e0!3m2!1siw!2sil!4v1654597355178!5m2!1siw!2sil" width="600" height="450" loading="lazy"></iframe>
          


</form> 

    </div>

                }
export default RouteS;