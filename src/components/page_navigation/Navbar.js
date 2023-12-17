import logo from "../../images/logo.svg";
import pageLinks from "./pageLinksObj";
import socialLinks from "./socialLinksObj";
import Navli from "./Navli";
import SocialLi from "./SocialLi";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul
            className={showNavbar ? "nav-links show-links" : "nav-links"}
            id="nav-links"
          >
            {pageLinks.map((link) => (
              <Navli {...link} key={link.id} className={"nav-link"} />
            ))}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => (
              <SocialLi {...link} key={link.id} className={"nav-icon"} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
