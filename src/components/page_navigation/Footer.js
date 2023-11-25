import pageLinks from "./pageLinksObj";
import socialLinks from "./socialLinksObj";
import Navli from "./Navli";
import SocialLi from "./SocialLi";

const Footer = () => {
  return (
    <>
      {/* page links */}
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((link) => (
            <Navli {...link} key={link.id} className={"footer-link"} />
          ))}
        </ul>
        {/* social links */}
        <ul className="footer-icons">
          {socialLinks.map((link) => (
            <SocialLi {...link} key={link.id} className={"footer-icon"} />
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
