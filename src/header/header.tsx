import Heading from "../assets/Vector.png";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <img src={Heading} alt="" />
      <div className="divider"></div>
    </div>
  );
}

export default Header;
