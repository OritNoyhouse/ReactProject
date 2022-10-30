import * as React from 'react';
import { Button, makeStyles, OutlinedInput, Typography, Theme, Tabs, List, ListItemText } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
// import { palette } from '@mui/system';
import AbcSharpIcon from '@mui/icons-material/AbcSharp';
import { ClassNames } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { blue } from '@material-ui/core/colors';
import { Opacity } from '@material-ui/icons';

import { clear } from 'console';
import Doctor from '../SignIn/Doctor';
import axios from "axios";
import { useForm } from "react-hook-form";
import User from '../SignInClient/User';
import '../Orders/Order.css';
import { Link, useParams } from "react-router-dom";
import Orderss from '../Orders/Oders'
import { ListItemButton } from '@mui/material';
import Request from '../RequestOf/Request'


interface Details {
    orderr: Orderss,
}

function Orders(props: any): JSX.Element {

    let myOrders = props.myOrders as Orderss[];
    console.log(myOrders);
    let id= myOrders[0].IdPatient;
    return  (
       
    <div className='header'>
         
        <div className='header'>רשימת אישפוזים קודמים</div>        
                 <Tabs orientation="vertical">
                        <List component="nav" aria-label="mailbox folders">
                             {myOrders.map(s =>
                                   <ListItemButton divider>
                                            
                                          <ListItemText primary={` תאריך בקשה: ${s.DateOf}`} style={{ textAlign: "right" }}></ListItemText>
                                    </ListItemButton>
                             )}
                        </List>
            </Tabs> 

            <br>
            </br>          
                <Button id="butto" variant="contained"  
                    color="primary"
                >
                    +
                </Button>
               
            : <Request myNewOrders={id}></Request>


        
    </div>)
}
export default Orders;
