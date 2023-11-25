const Navli = ({ href, name, className }) => {
  return (
    <li>
      <a href={href} className={className}>
        {" "}
        {name}{" "}
      </a>
    </li>
  );
};
export default Navli;
