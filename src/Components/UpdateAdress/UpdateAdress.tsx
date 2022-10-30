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
// import "./SignIn.css"
import Adress from '../UpdateAdress/Adress'; 

import { Link, useParams } from "react-router-dom";
// import Adress from '../RequestOf/Adress';





function UpdateAdress(): JSX.Element {
    const url = "https://localhost:44346/";
    const { register, handleSubmit, formState: { errors } } = useForm<Adress>();
    const { id } = useParams();
    const { firstName } = useParams();
    const { lastName } = useParams();
    const addAdmin = async (data: Adress) => {
        console.log(data); 
        let adminPromise = axios.post(url + "api/Adress/8", data );
        let response = await adminPromise;
        console.log("addAdress!!!!!!!!");
    }
    return <div className='header'>
       
        <div className='header'>עידכון הכתובת</div>
        <form onSubmit={handleSubmit(addAdmin)} className='LogIn'>
        
        <p>
                <TextField id='street'  label="רחוב" type="text"{...register('street', { required: true })} />
                {errors.street?.type === "required" && <span className='error' > <br />Required field</span>}
                
            </p>
            <p>
                <TextField id='numberHouse'  label="מספר בניין" type="text"{...register('numberHouse', { required: true })} />
                {errors.numberHouse?.type === "required" && <span className='error' > <br />Required field</span>}
   
            </p>

            <p>
                <TextField id='city'  label="עיר" type="text"{...register('city', { required: true })} />
                {errors.city?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>
            <p>
                <TextField id="floor"  label="קומה" type="text"{...register('floor', { required: true })} />
                {errors.floor?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>
            <p>
                <TextField id="cnisa" label="כניסה" type="text"{...register('cnisa', { required: true })} />
                {errors.cnisa?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>
            <p>
                <TextField id="numberFlat"  label="מספר דירה" type="text"{...register('numberFlat', { required: true})} />
                {errors.numberFlat?.type === "required" && <span className='error' > <br />Required field</span>}
                
            </p>
            <p>
                <TextField id="IsParking"  label="האם יש חניה בבנין?" type="text"{...register('IsParking', { required: true })} />
                {errors.IsParking?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>
           
            
             <p>
                <TextField id="heaara"  label="הערות" type="text"{...register('heaara', { required: true })} />
                {errors.heaara?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>

           
           
                <Button id="button" variant="contained"  type='submit'
                    color="primary"//***********איך גורמים שבלחיצה על שליחה, יעורר את הפעולה שנמצאת בפרוגרס */
                   >
                   הרשמה
                </Button>

           
        </form>
    </div>
}
export default UpdateAdress;
