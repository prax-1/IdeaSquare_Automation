import Navbar from './component/Navbarmenu';
import Main from './component/main';
import All from './component/all';
import Login from './component/login';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <div>
   
    <Router>
      <div>
        {/* <Login/> */}
        <Navbar/>
        {/* <Main/> */}
      <Routes>
        <Route path="/HOME" element = {<Main/>} />
        <Route path="/contacts" element = {<Main/>} />
        <Route path="/edit" element = {<Login/>} />
        <Route path="/COMPONENTS" element = {<All/>} />
      
        
      </Routes>
      </div>
    </Router>
    {/* <All/> */}
    </div>
    </>
  );
}

export default App;
