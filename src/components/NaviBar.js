import React from "react";
import { Button, Navbar, Nav, Dropdown } from "react-bootstrap";
import '../App.css'
import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import useStore from "./state";

export default function NaviBar() {
    const navigate = useNavigate();
    const log = useStore((state) => state.log)
    const profile_pic = useStore((state) => state.profile_pic)
    const nick_name = useStore((state) => state.nick_name)
    const outLog = useStore((state) => state.outLog)
    function handleClick() {
        outLog()
        navigate('/')
    }
    return (
        <>
            <Navbar collapseOnSelect className="navig" expand="lg">
                <Navbar.Brand className="logo"><Link to="/"><img src={logo} alt="logo"></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                
                <Navbar.Collapse id="responsive-navbar-nav" className="NavItems">
                    {log ?
                    (
                        <Nav className="mr-auto">
                        <Nav.Link className="nav__inner"><Link to="/">Главная страница</Link></Nav.Link>
                        <Nav.Link className="nav__inner"><Link to="/create">Заполнить заявку</Link></Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="mr-auto">
                        <Nav.Link className="nav__inner"><Link to="/">Главная страница</Link></Nav.Link>
                        <Nav.Link className="nav__inner"><Link to="/create">Заполнить заявку</Link></Nav.Link>
                        <Nav.Link className="nav__inner"><Link to="/list">Все заявки</Link></Nav.Link>
                        </Nav>  
                    )}

                    {log ? ( 
                    <Nav className="buttons">                     
                        <Button variant="primary" className="nav__inner nav__button"><Link to="/wip" className="nav_link">Регистрация</Link></Button>
                        <Button variant="primary" className="nav__inner nav__button"><Link to="/sign_in" className="nav_link">Вход</Link></Button>
                    </Nav>) : (
                        <Nav className="user_login">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1">
                                    <img src={profile_pic} alt="user_logo"></img>
                                    <p>{nick_name}</p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="dropdown_inner" variant="dark">
                                    <Dropdown.Item><Link to="/profile" className="nav_link"><p className="dropdown_inner">Профиль</p></Link></Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleClick}><p className="dropdown_inner">Выход</p></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    )}
                </Navbar.Collapse>
                
            </Navbar>
        </>
    );
}