import { Link } from "react-router-dom";

const Header = () => {
  return (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <div className="header" >
  SEENIT
</div>
  </Link>
  )
};

export default Header;