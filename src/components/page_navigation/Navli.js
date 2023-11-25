const Navli = ({ href, name }) => {
  return (
    <li>
      <a href={href} className="nav-link">
        {" "}
        {name}{" "}
      </a>
    </li>
  );
};
export default Navli;
