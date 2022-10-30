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
import User from '../SignInClient/User';
import Doctor from '../SignIn/Doctor'; 
import LogInPatients from '../LoginPatient/LogInPatients';

import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";







export default function LogIn(): JSX.Element {

    const url = " https://localhost:44346";
    const { register, handleSubmit, formState: { errors } } = useForm<Doctor>();
    const navigate=useNavigate ();
    const handelAccount =( id:number,firstName:string,lastName:string) => {      
        navigate(`/areaofDoctor/${id}/${firstName}/${lastName}`);
    }
    const addAdmin = async (data: Doctor) => {
        console.log(data);
        let adminPromise = axios.get("https://localhost:44346/api/Doctor/18/"+ data.password); 
        let userPromise = await adminPromise;
        var loginUser:Doctor = userPromise.data;
        console.log(loginUser);
        if(loginUser.id !=0)
        {
           
            handelAccount( loginUser.id,loginUser.firstName,loginUser.lastName)
        }
        else
        {

        }
    } 
    return(
       <div className='header'>  
    <div className='header'>התחברות</div>
    <form onSubmit={handleSubmit(addAdmin)} className='LogIn'>   
    <p>
            <TextField id='Id'  label="תעודת זהות" type="text"{...register('id', { required: true, minLength: 2 })} />
            {errors.id?.type === "required" && <span className='error' > <br />Required field</span>}
            {errors.id?.type === "minLength" && <span className='error'><br />too short</span>}
        </p>
        <p>
            <TextField id="Password"  label="סיסמא" type="password"{...register('password', { required: true })} />
            {errors.password?.type === "required" && <span className='error' > <br />Required field</span>}
    
        </p>
          <Button id="button" variant="contained"  type='submit'
                color="primary"
               >
               OK             
            </Button>
            </form>
 
             </div>)
}

    


