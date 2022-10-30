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
import LogInPatients from '../LoginPatient/LogInPatients';

import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import "./LoginPatient.css"




export default function LoginPatient(): JSX.Element {

    const { register, handleSubmit, formState: { errors } } = useForm<User>();

    const url = " https://localhost:44346";

   

    const navigate = useNavigate();
    const handleUser = (id: number, firstName: string, lastName: string) => {
        navigate(`/AreaOfPatient/${id}/${firstName}/${lastName}`);
    }

    const addAdmin = async (data: User) => {
        console.log(data);
        let adminPromise = axios.get("https://localhost:44346/api/Patient/18/" + data.password);
        let userPromise = await adminPromise;
        var loginUser: User = userPromise.data;
        console.log(loginUser);
        if (loginUser.id != 0) {
            handleUser(loginUser.id, loginUser.firstName, loginUser.lastName);
        }
        else {

        }
    }

    return (
        <div className='header'>
            <div className='header'>התחברות</div>
            <form onSubmit={handleSubmit(addAdmin)} className='LogIn'>
                <p>
                    <TextField id='Id' label="תעודת זהות" type="text"{...register('id', { required: true, minLength: 2 })} />
                    {errors.id?.type === "required" && <span className='error' > <br />Required field</span>}
                    {errors.id?.type === "minLength" && <span className='error'><br />too short</span>}
                </p>
                <p>

                    <TextField id="Password" label="סיסמא" type="password"{...register('password', { required: true })} />
                    {errors.password?.type === "required" && <span className='error' > <br />Required field</span>}
                </p>
                <Button id="button" variant="contained" type='submit'
                    color="primary"//***********איך גורמים שבלחיצה על שליחה, יעורר את הפעולה שנמצאת בפרוגרס */
                >
                    OK
                </Button>
                <br></br>
                <a id="colour" href="/SignInClient"    > אין לך חשבון? צור עכשיו</a>
            </form>
        </div>)
}