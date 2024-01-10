import SidebarGroup from "./sidebar-group.jsx";
import SidebarItem from "./sidebar-item.jsx";

import { IoHomeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

import "../../styles/sidebar-container/sidebar-container.css";

function LeftSidebar() {
  return (
    <div className="sidebar-container">
      {/*Top Section*/}
      <SidebarGroup>
        <SidebarItem link={"/"} icon={<IoHomeOutline />} text={"For You"} />
        <SidebarItem link={"/popular"} icon={<CiStar />} text={"Popular"} />
      </SidebarGroup>
      {/*ADD RECENT CATEGORY*/}
      {/*Topics*/}
      <SidebarGroup></SidebarGroup>
      {/*Resources*/}
      <SidebarGroup></SidebarGroup>
    </div>
  );
}

export default LeftSidebar;
