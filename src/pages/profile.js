import React from "react";
import useStore from "../components/state";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const profile_pic = useStore((state) => state.profile_pic)
    const nick_name = useStore((state) => state.nick_name)
    const log = useStore((state) => state.log)

    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }
    
    return (
        <div className="content profile">
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
                    <div className="profile_top">
                        <div className="profile_main">
                            <div className="profile_picture">
                                <img src={profile_pic}></img>
                            </div>
                            <div className="profile_nickName">
                                Ваш ник: <p className="nickName">{nick_name}</p>
                            </div>
                        </div>
        
                        <div className="profile_second">
                            <div className="profile_nickName_changer">
                                Новый ник:
                                <br/>
                                <br/>
                                <input type="text"></input>
                                <br/>
                                <br/>
                                <Button>Изменить ник</Button>
                            </div>
                        </div>
                    </div>
                    <div className="profile_bottom">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto, eos doloremque maiores dignissimos tempora similique recusandae sunt eligendi deleniti id maxime. At sit repudiandae optio vitae neque eos placeat!</p>
                    </div>
                </div>
            )}
        </div>
    )
}