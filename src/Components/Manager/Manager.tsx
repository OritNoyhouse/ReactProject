import { TextField } from "@material-ui/core";
import './Manager.css';
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
import LoginDoctor from '../Login/LoginDoctor';
import axios from "axios";
import { useForm } from "react-hook-form";
import ManagerClass from "../Manager/ManagerClass";
import { Link, useNavigate } from "react-router-dom";




function Manager(): JSX.Element {

    
   

const navigate=useNavigate ();
const handelAccount =() => {
    
    navigate(`/Area`);
}

    const { register, handleSubmit, formState: { errors } } = useForm<ManagerClass>();
    return (
        <div className="header">

<br>
                </br>
            <div className="header">כניסת מנהל</div>
            <form>
                
                <p>
                    <TextField id='password'  label="סיסמא" type="password"
                        {...register('password', { required: true})}
                    />
                   
                </p>
                
              
               
                    <Button id="button" variant="contained" type='submit' onClick={handelAccount}
                        color="primary"
                       >
                      אישור
                    </Button>
                

            </form>
           
        </div>

    );
}

export default Manager;
