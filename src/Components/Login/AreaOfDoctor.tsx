import { TextField } from "@material-ui/core";
import './LogIn.css';
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

import { Link, useNavigate, useParams } from "react-router-dom";
import RouteS from "../Route/RouteS";
import showRouts from "./showRouts";
import { useState } from "react";



export default function AreaOfDoctor(): JSX.Element {

    const { id } = useParams();
    const { firstName } = useParams();
    const { lastName } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleUser = (id: number, firstName: string, lastName: string) => {
        navigate(`/route/${id}/${firstName}/${lastName}`);
    }
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    var initRoute: showRouts = { x: 0,y:0, street: "",  city: "" ,numOfBulding:0};
    const [routeArr, setRoute] = useState<showRouts[]>([initRoute]);
   
    const getRoute = async () => {
        let adminPromise = axios.get("https://localhost:44346/api/DailyReport/9/" + id+"/"+current.getDate());
        let userPromise = await adminPromise;
        var values = userPromise.data;
        values.slice(1, 1);
        console.log(values);
        setRoute(values);
    }
         
    return (
        <div className="header">
                 <br>
                </br>
                
            <div className="header">אזור אישי לרופא {firstName} {lastName}</div> 
            
                 {routeArr[0].x == 0 ?
                 <div>
                    <Button id="button"variant="contained" type='submit' onClick={getRoute}
                        color="primary"
                       >
                     המסלול המתוכנן למשמרת הקרובה
                    </Button>
                    </div>
                    : <RouteS myRoute={routeArr}></RouteS>}
        </div>);
        
}



