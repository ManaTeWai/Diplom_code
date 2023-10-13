import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from "react-bootstrap";

export const Wip = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }
    return (
        <div className="content sucess_page">

            <Alert className="alert" variant="warning">
                <Alert.Heading>Этот раздел находится на стадии разработки</Alert.Heading>
                <div className="d-flex">
                    <Button onClick={home} className="alert_btn">На главную страницу</Button>
                </div>
            </Alert>
        </div>
    )
}