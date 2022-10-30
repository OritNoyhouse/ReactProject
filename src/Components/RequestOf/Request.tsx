import * as React from 'react';
import { Button, makeStyles, OutlinedInput, Typography, Theme } from '@material-ui/core';
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
import Adress from './Order';

import { Link } from "react-router-dom";
import Order from '../RequestOf/Order';





function Request(props:any): JSX.Element {
    const url = "https://localhost:44346/";
    const { register, handleSubmit, formState: { errors } } = useForm<Order>();
    let myNewOrders = props.myNewOrders as number;
    const addAdmin = async (data: Order) => {
        console.log(data); 
        data.idPatient=myNewOrders;
        let adminPromise = axios.post(url + "api/OrderIshpuz/18", data); 
        let response = await adminPromise;
        console.log("addorder!!");
    }
   

    return <div className='header'>
       
        <div className='header'>בקשת אישפוז חדשה</div>
        <form onSubmit={handleSubmit(addAdmin)} className='LogIn'>
        
        

            <p>
                <TextField id="AdressParking" label="תאריך הבקשה" type="date"{...register('dateOf', { required: true })} />
                {errors.dateOf?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>
                <Button id="button" variant="contained"  type='submit'
                    color="primary"
                   >
                  OK
                </Button>

           
        </form>
    </div>
}
export default Request;
