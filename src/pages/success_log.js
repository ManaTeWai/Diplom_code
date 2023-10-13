import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from "react-bootstrap";

export const Success_log = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('/list');
    }
    return (
        <div className="content sucess_page">

            <Alert className="alert" variant="success">
                <Alert.Heading>Вы удачно вошли в аккаунт</Alert.Heading>
                <div className="d-flex">
                    <Button onClick={home} className="alert_btn">Просмотр всех заявок</Button>
                </div>
            </Alert>
        </div>
    )
}