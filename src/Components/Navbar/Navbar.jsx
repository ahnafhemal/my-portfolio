import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="font-lato">
      <h3>DeveloperAhnaf</h3>
      <div>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="/#">About me</a>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
