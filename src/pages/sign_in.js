import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import useStore from "../components/state";

export const SignIn = () => {
    const setLog = useStore((state) => state.setLog)

    const navigate = useNavigate();

    let a = 0;
    const handleChange = (event) => {
        if (event.target.value == 'admin'){
            a = 1;
            console.log(a);
        }
    }

    function HandleSubmit(event) {
        if (a = 1) {
            setLog()
            navigate('/success_log');
        }
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();

        // try {
            // axios.post('https://mana.tw1.su/api/user/save', inputs).then(function(response){
            //     console.log(response.data);
                // navigate('/');
            // });
        // }
        // catch (error) {
        //     console.log(console.error.response.data);
        // }

        
    // }

    return (
        <div className="content">
            <Form  className="sign_in" method="POST">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="login">Логин:</Form.Label>
                    <Form.Control id="login" type="login" placeholder="name" name="sign_email" onChange={handleChange} autoComplete="username"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="pass">Пароль:</Form.Label>
                    <Form.Control id="pass" type="password" placeholder="password" name="sign_pass" onChange={handleChange} autoComplete="current-password"/>
                </Form.Group>
                <Form.Group>
                    <Button className="Checkedbtn sign" type='submit' name="sign_in" id="sign_in" formMethod="POST" onClick={HandleSubmit}>Войти</Button>
                </Form.Group>
            </Form>
        </div>
    )
}