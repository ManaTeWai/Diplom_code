import React from "react";
import { Form } from 'react-bootstrap';
import Checked from '../components/checked';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Create = () => {
	
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(inputs);

        axios.post('https://mana.tw1.su/api/candidate/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/success');
        });
    }


    return (
        <div className="content">
            <div className="content__header">
                <h3>Отправка заявки</h3>
            </div>
            <div className="form">
                <Form onSubmit={handleSubmit} method="POST" className="create">
                <input type='hidden' name='submitted'/>
                    <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="SecondNameInput">Введите Вашу фамилию</Form.Label>
                        <Form.Control id="SecondNameInput" placeholder="Фамилия" name="SecondName" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="NameInput">Введите Ваше имя</Form.Label>
                        <Form.Control id="NameInput" placeholder="Имя" name="Name" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="SurnameInput">Введите Ваше отчество (при наличии)</Form.Label>
                        <Form.Control id="SurnameInput" placeholder="Отчество" name="Surname" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="EmailInput">Email</Form.Label>
                        <Form.Control id="EmailInput" type="email" placeholder="name@example.com" name="Email" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="NumberInput">Номер телефона</Form.Label>
                        <Form.Control id="NumberInput" type="tel" name="Phone" placeholder="+79881236790" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="DateInput">Дата рождения</Form.Label>
                        <Form.Control id="DateInput" type="date" name="Birthday" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Опишите Вашу трудовую деятельность</Form.Label>
                        <Form.Control id="TextInput" as="textarea" rews={5} name="About" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Checked/>
                    </Form.Group>
                </fieldset>
            </Form>
        </div>
    </div>
    )
}