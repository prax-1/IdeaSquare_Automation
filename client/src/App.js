import Navbar from './component/Navbarmenu';
import Main from './component/main';
import All from './component/all';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
    <div>
   
    <Router>
      <div>
        <Navbar/>
        
      <Routes>
        {/* Define your routes */}
        <Route path="/HOME" element = {<Main/>} />
        <Route path="/contacts" element = {<Main/>} />
        <Route path="/edit" element = {<Main/>} />
        <Route path="/COMPONENTS" element = {<All/>} />
        {/* Add more routes as needed */}
      </Routes>
      </div>
    </Router>
    {/* <All/> */}
    </div>
    </>
  );
}

export default App;
