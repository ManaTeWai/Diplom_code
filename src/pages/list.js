import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from "react-bootstrap";
import useStore from "../components/state";


export const List = () => {
    const log = useStore((state) => state.log)

    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }

    const [diplom, setDiplom] = useState([]);

    useEffect(() => {
        getDiplom();
    }, []);

    function getDiplom() {
        axios.get('https://mana.tw1.su/api/users/').then(function(response) {
            console.log(response.data);
            setDiplom(response.data)
        });
    }

    return (
        <div className="content">
            {log ? (
            <div className="outlog sucess_page">
                <Alert className="alert" variant="danger">
                    <Alert.Heading>У Вас нет прав доступа к этой странице.<br/>Если вы - администратор, пройдите авторизацию</Alert.Heading>
                    <div className="d-flex">
                        <Button onClick={home} className="alert_btn">На главную страницу</Button>
                    </div>
                </Alert>
            </div>
            ): (
            <div className="log">
                <div className="content__header">
                    <h3>Все заявки</h3>
                </div>
                <table className="list_table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Email</th>
                            <th>Номер телефона</th>
                            <th>Дата рождения</th>
                            <th>Профессиональная деятельность</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diplom.map((user, key) => 
                            <tr key={key}>
                                <td className="td">{user.id}</td>
                                <td className="td">{user.SecondName}</td>
                                <td className="td">{user.Name}</td>
                                <td className="td">{user.Surname}</td>
                                <td className="td">{user.Email}</td>
                                <td className="td">{user.Phone}</td>
                                <td className="td">{user.Birthday}</td>
                                <td className="td">{user.About}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            )} 
        </div>     
    )
}