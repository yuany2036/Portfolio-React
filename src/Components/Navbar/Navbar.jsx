import yu from "./img/yu.png";
import an from "./img/an.png";
import chen from "./img/chen.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navList">
        <ul>
          <a href="#section_main">
            <img src={chen} alt="" />
            <img src={yu} alt="" />
            <img src={an} alt="" />
          </a>
          <a href="#section_main">
            <li>home</li>
          </a>
          <a href="#section_about">
            <li>about</li>
          </a>
          <a href="#section_skills">
            <li>skills and tools</li>
          </a>
          <a href="#section_projects">
            <li>projects</li>
          </a>
          <a href="#section_contact">
            <li>contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
