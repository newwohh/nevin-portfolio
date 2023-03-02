import NavBar from "./NavBar/NavBar";
import "./Nav.css";
import DarkMode from "./NavBar/DarkMode/DarkMode";
function Nav(props) {
  return (
    <div className="Nav" id="top">
      <NavBar change={props.change} checked={props.check} />
    </div>
  );
}

export default Nav;
