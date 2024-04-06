import { NavLink } from "react-router-dom";
import "./Header.css"

function Header(){
    return(
        <nav style={{ padding: "20px" }}>
      <div className="head-container">
        <div>
          <h1 style={{ color: "White", paddingLeft: "30px" }}>
            <span style={{ color: "Red" }}>A</span>khilsai
          </h1>
        </div>
        <div className="head-items">
          <NavLink to="/" exact activeClassName="active">
            <h1 style={{margin: "10px" }}>Home</h1>
          </NavLink>
          <NavLink to="/About" activeClassName="active">
            <h1 style={{margin: "10px" }}>About</h1>
          </NavLink>
          <NavLink to="/Skills" activeClassName="active">
            <h1 style={{margin: "10px" }}>Skills</h1>
          </NavLink>
          <NavLink to="/Project" activeClassName="active">
            <h1 style={{margin: "10px" }}>Projects</h1>
          </NavLink>
          <NavLink to="/Contact" activeClassName="active">
            <h1 style={{ margin: "10px" }}>Contact</h1>
          </NavLink>
        </div>
      </div>
    </nav>
    )
};

export default Header;