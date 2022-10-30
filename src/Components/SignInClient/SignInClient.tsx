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
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const useStyles = makeStyles(textField => ({
    root: {
        marginTop: "12px",
        marginBottom: "7px"
    },
    buttonCancel: {
        //  color: blue[600],
    },
    buttonSend: {
        //   color: blue[900]
    },
}));

//const classes = useStyles();

function SignInClient(): JSX.Element {
    const url = " https://localhost:44346";
    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    const addAdmin = async (data: User) => {
        console.log(data);
        let adminPromise = axios.post("https://localhost:44346/api/Patient/8", data);
  
        let response = await adminPromise;
        console.log("adduser!!!!!!!!");
    }
    const classes = useStyles();

   
    return <div className='header'>
       
        <div className='header'>רישום פציינט חדש</div>
        <form onSubmit={handleSubmit(addAdmin)} className='LogIn'>
        
        <p>
                <TextField id='Id' className={classes.root} label="תעודת זהות" type="text"{...register('id', { required: true, minLength: 2 })} />
                {errors.id?.type === "required" && <span className='error' > <br />Required field</span>}
                {errors.id?.type === "minLength" && <span className='error'><br />too short</span>}
            </p>
            <p>
                <TextField id='FirstName' className={classes.root} label="שם פרטי" type="text"{...register('firstName', { required: true, minLength: 2 })} />
                {errors.firstName?.type === "required" && <span className='error' > <br />Required field</span>}
                {errors.firstName?.type === "minLength" && <span className='error'><br />too short</span>}
            </p>

            <p>
                <TextField id='LastName' className={classes.root} label="שם משפחה" type="text"{...register('lastName', { required: true, minLength: 2 })} />
                {errors.lastName?.type === "required" && <span className='error' > <br />Required field</span>}
                {errors.lastName?.type === "minLength" && <span className='error'><br />too short</span>}
            </p>
            <p>
                <TextField id="Statuscovid19" className={classes.root} label="סטטוס קורונה" type="text"{...register('statuscovid19', { required: true })} />
                {errors.statuscovid19?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>
            <p>
                <TextField id="Gender" className={classes.root} label="מגדר" type="text"{...register('gender', { required: true })} />
                {errors.gender?.type === "required" && <span className='error' > <br />Required field</span>}
                
            </p>
           
            <p>
                <TextField id="Age" className={classes.root} label="שנת לידה" type="text"{...register('age', { required: true })} />
                {errors.age?.type === "required" && <span className='error' > <br />Required field</span>}
   
            </p>
            <p>
                <TextField id="Password" className={classes.root} label="סיסמא" type="password"{...register('password', { required: true })} />
                {errors.password?.type === "required" && <span className='error' > <br />Required field</span>}
        
            </p>
            <p>
                <TextField id="PhoneNumber" className={classes.root} label="מספר פלאפון" type="text"{...register('phoneNumber', { required: true })} />
                {errors.phoneNumber?.type === "required" && <span className='error' > <br />Required field</span>}
               
            </p>
           
           
                <Button id="button" variant="contained" className={classes.buttonSend} type='submit'
                    color="primary"
                   >
                   הרשמה
                </Button>

            
        </form>
    </div>
}
export default SignInClient;
