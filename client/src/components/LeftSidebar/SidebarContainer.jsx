import SidebarItem from "./SidebarItem.jsx";
import Dropdown from "./Dropdown.jsx";

import {IoHomeOutline} from "react-icons/io5";
import {CiStar} from "react-icons/ci";
import {FaCode} from "react-icons/fa6";

import "../../styles/sidebar-container.css";
import {useEffect, useState} from "react";

function LeftSidebar() {
    const [randomCommunities, setRandomCommunities] = useState([]);

    useEffect(() => {
        const fetchRandomCommunities = async () => {
            const response = await fetch("http://localhost:9000/api/communities");
            const json = await response.json();

            if (response.ok) {
                console.log(json);
                setRandomCommunities(json);
            }
        };
        fetchRandomCommunities();
    }, []);

    return (
        <div className="sidebar-container">
            <ul>
                <SidebarItem link={"/"} icon={<IoHomeOutline/>} title={"For You"}/>
                <SidebarItem link={"/popular"} icon={<CiStar/>} title={"Popular"}/>
                <Dropdown title={"Communities"} communities={randomCommunities}/>
            </ul>
        </div>
    );
}

export default LeftSidebar;
