import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
const NavigationBar: React.FC = () => {
 

  return (
    <nav>
      <ul>
        <li>
          <Link to="/api/welcome">Welcome</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
