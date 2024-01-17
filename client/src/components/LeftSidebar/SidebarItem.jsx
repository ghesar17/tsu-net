import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const SidebarItem = ({ link, icon, community_name, title }) => {
  return (
    <li>
      <Link className={"sidebar-item"} to={link}>
        <IconContext.Provider
          value={{ style: { paddingRight: "15px" }, size: "20px" }}
        >
          {icon}
        </IconContext.Provider>
        {community_name}
        {title}
      </Link>
    </li>
  );
};
export default SidebarItem;
