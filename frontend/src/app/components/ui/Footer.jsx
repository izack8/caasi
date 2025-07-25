function Footer() {
  return (
    <footer>
      <div className="footer">
        {/* Navigation in sidebar */}
      <nav className="sidebar-nav">
        <a href="projects">Projects</a>
        <a href="#journey">Journey</a>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <div className="social-links">
        {/* Add your social media links */}
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
      </div>
        <p>Proudly created by Isaac</p>&copy; 2025
      </div>
    </footer>
  );
}

export default Footer;