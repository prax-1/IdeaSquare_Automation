import './Navbar.css';
// Import the CSS file for styling
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="./assets/techmaniacs_iitt_logo-removebg-preview.png" alt="Topic Image" />
          
        </a>

        <div className="navbar-links">
          <Link className='items' id='jitem_1' to="/HOME">Home</Link>
          <Link className='items' id='jitem_2' to="/CONTACTS">Contacts</Link>
          <Link className='items' id='jitem_3' to="/EDIT">Edit</Link>
          <Link className='items' id='jitem_4' to="/COMPONENTS">Ask For Component</Link>
        </div>
      </div>
    </nav>
  );
}
