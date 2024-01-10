import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

import "../../styles/sidebar-container/sidebar-container.css";

const SidebarItem = (props) => {
  return (
    <li className={"sidebar-item"}>
      <Link to={props.link} className={"sidebar-button"}>
        <IconContext.Provider
          value={{ style: { paddingRight: "15px" }, size: "20px" }}
        >
          {props.icon}
        </IconContext.Provider>
        {props.text}
      </Link>
    </li>
  );
};
export default SidebarItem;
