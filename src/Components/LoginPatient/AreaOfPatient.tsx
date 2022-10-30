import { TextField } from "@material-ui/core";
import './AreaOfPatient.css';
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Orderss from "../Orders/Oders";
import Orders from "../Orders/Order";




function AreaOfPatient(): JSX.Element {

    const { id } = useParams();
    const { firstName } = useParams();
    const { lastName } = useParams();
    const navigate = useNavigate();

    var initOrder: Orderss = { IdOrder: 0, IdPatient: 0, IdDoctor: 0, DateOf: new Date(), HourOfVisit: 0, CodeAdress: 0, Machine: 0, LevelOfUrgent: 0 };
    const [orderArr, setOrders] = useState<Orderss[]>([initOrder]);

    const getOrders = async () => {
        let adminPromise = axios.get("https://localhost:44346/api/OrderIshpuz/9/" + id);
        let userPromise = await adminPromise;
        var values = userPromise.data;
        values.slice(1, 1);
        setOrders(values);
    }

    return (

        <div>
            {orderArr[0].IdOrder == 0 ?
                <div>
                    <h1>אזור אישי {firstName} {lastName}</h1>
                    <Button id="button" variant="contained" type='submit' onClick={() => navigate(`/UpdateAdress/${id}/${firstName}/${lastName}`)}
                        color="primary"//***********איך גורמים שבלחיצה על שליחה, יעורר את הפעולה שנמצאת בפרוגרס */
                    >
                        לעידכון כתובת
                    </Button>
                    <Button id="button" variant="contained" type='submit' onClick={getOrders}
                        color="primary"//***********איך גורמים שבלחיצה על שליחה, יעורר את הפעולה שנמצאת בפרוגרס */
                    >
                        האישפוזים שלי
                    </Button>
                </div>
                : <Orders myOrders={orderArr}></Orders>}
        </div>

       

    );
}

export default AreaOfPatient;