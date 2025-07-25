import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav className="nav_bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/web_journey">Web Journey</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;