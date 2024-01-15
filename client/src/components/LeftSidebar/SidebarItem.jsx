import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

import "../../styles/sidebar-container.css";

const SidebarItem = ({ link, icon, text }) => {
  return (
    <li>
      <Link className={"sidebar-item"} to={link}>
        <IconContext.Provider
          value={{ style: { paddingRight: "15px" }, size: "20px" }}
        >
          {icon}
        </IconContext.Provider>
        {text}
      </Link>
    </li>
  );
};
export default SidebarItem;
