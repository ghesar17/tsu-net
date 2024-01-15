import SidebarItem from "./SidebarItem.jsx";
import Dropdown from "./Dropdown.jsx";

import { IoHomeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";

import "../../styles/sidebar-container.css";
import { useEffect, useState } from "react";

function LeftSidebar() {
  const [randomCommunities, setRandomCommunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomCommunities = async () => {
      const response = await fetch("http://localhost:4000/api/communities");
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setRandomCommunities(json);
        setLoading(false);
      }
    };
    fetchRandomCommunities();
  }, []);

  return (
    <div className="sidebar-container">
      <ul>
        <SidebarItem link={"/"} icon={<IoHomeOutline />} text={"For You"} />
        <SidebarItem link={"/popular"} icon={<CiStar />} text={"Popular"} />
        {!loading && (
          <Dropdown title={"Communities"} communities={randomCommunities} />
        )}
        <Dropdown
          title={"Categories"}
          submenu={[
            {
              title: "Language",
              communities: ["Python", "JavaScript", "C", "Java"],
            },
            {
              title: "Learning",
              communities: [
                "Web Development",
                "Machine Learning",
                "Data Science",
              ],
            },
            {
              title: "Misc",
              communities: [
                "Content Creation",
                "Coding Competitions",
                "General Advice",
              ],
            },
          ]}
        />
      </ul>
    </div>
  );
}

export default LeftSidebar;
