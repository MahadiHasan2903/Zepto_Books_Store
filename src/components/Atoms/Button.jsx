import { Link } from "react-router-dom";

const Button = ({ title, link, styles, icon: Icon }) => {
  const buttonContent = (
    <button className={`${styles}`}>
      {title} {Icon && <Icon />}
    </button>
  );

  return link ? <Link to={link}>{buttonContent}</Link> : buttonContent;
};

export default Button;
