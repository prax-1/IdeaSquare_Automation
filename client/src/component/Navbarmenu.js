import './Navbar.css'; // Import the CSS file for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="./assets/techmaniacs_iitt_logo-removebg-preview.png" alt="Topic Image" />
          
        </a>

        <div className="navbar-links">
          <a href="#section_1">Home</a>
          <a href="#section_2">Browse Topics</a>
          <a href="#section_3">How it works</a>
          <a href="#section_4">FAQs</a>
          <a href="#section_5">Contact</a>
        </div>
      </div>
    </nav>
  );
}
