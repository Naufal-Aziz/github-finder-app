import PropTypes from "prop-types";

export const Navbar = ({icon, title}) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        <span className="m-1">{title}</span>
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
