import logo from "../../images/logo.svg";
import pageLinks from "./pageLinksObj";
import socialLinks from "./socialLinksObj";
import Navli from "./Navli";
import SocialLi from "./SocialLi";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [linksHeight, setLinksHeight] = useState(0);
  // const [linksMargin, setLinksMargin] = useState(0);
  const [navWidth, setNavWidth] = useState(window.innerWidth);
  const navRef = useRef(null);
  // const linksRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const navWidth = navRef.current.getBoundingClientRect().width;
      if (navWidth >= 992) {
        setShowNavbar(false);
      }
      setNavWidth(navWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const expandLinks = () => {
    // const linksCont = linksRef.current.getBoundingClientRect();
    // setLinksHeight(linksCont.x);
    // setLinksMargin(linksCont.top * 2);
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={expandLinks}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul
            className={
              showNavbar
                ? navWidth >= 992
                  ? "nav-links"
                  : "nav-links show-links"
                : "nav-links"
            }
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
