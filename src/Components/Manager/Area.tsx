import { TextField } from "@material-ui/core";
 import './Area.css';
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
import { Link } from "react-router-dom";




function Area(): JSX.Element {
    return (
       
<div>
               <h1>אזור אישי-מנהל</h1>
                 <Link to="/addDoctor">
                    <Button id="button" variant="contained" type='submit'
                        color="primary"
                       >
                      להוספת רופא
                    </Button>
                </Link>
                <Link to="/SignInClient">
                    <Button id="button" variant="contained" type='submit'
                        color="primary"
                       >
                     להוספת פציינט
                    </Button>
                </Link>
</div>

);
}

export default Area;