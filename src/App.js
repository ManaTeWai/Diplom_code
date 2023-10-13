import './App.css';
import Navibar from './components/NaviBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import vk from './assets/vk.svg'
import github from './assets/github.svg'
import telegram from './assets/telegram.svg'
import useStore from "./components/state";



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home';
import {Create} from './pages/create';
import {List} from './pages/list';
import {Success} from './pages/success';
import {SignIn} from './pages/sign_in';
import {Success_log} from './pages/success_log';
import {Wip} from './pages/wip';
import {Profile} from './pages/profile';


function App() {
  const nick_name = useStore((state) => state.nick_name)
  const log = useStore((state) => state.log)
  return (
    <>
      <Router>
        <Navibar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path='/sign_in' element={<SignIn/>}></Route>
          <Route path='/success_log' element={<Success_log/>}></Route>
          <Route path='/wip' element={<Wip/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </Router>
      <footer className='footer'>
        <div className='copyright footer_inner'>
          <p>©️ Цыбульский Максим 2023</p>
        </div>
        <div className='social footer_inner'>
          <a href="https://vk.com/manatewai" target='_blank'><img src={vk}></img></a>
          <a href="https://github.com/ManaTeWai" target='_blank'><img src={github}></img></a>
          <a href="https://t.me/ManaTeWai" target='_blank'><img src={telegram}></img></a>
        </div>
        <div className='logotypes footer_inner'>
          { log ? (
            <p>Незарегистрированный пользователь</p>
          ) : (
            <p>{nick_name}</p>
          )}
        </div>
      </footer>
    </>
  );
}

export default App;
