import { TextField } from "@material-ui/core";

import * as React from 'react';
import { Button, makeStyles, OutlinedInput, Typography, Theme } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';

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

import { Link } from "react-router-dom";




function ListOfClients(): JSX.Element {

   
   
    return (
        <div className="header">

<br>
                </br>
            <div className="header">רשימת המטופלים</div>
            
                
             
                
                
               

            
           
        </div>

    );
}

export default ListOfClients;