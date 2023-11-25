const SocialLi = ({ href, iconType, className }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <i className={iconType}></i>
      </a>
    </li>
  );
};
export default SocialLi;
