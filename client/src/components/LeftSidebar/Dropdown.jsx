import {useState} from "react";

import {FaMinus, FaPlus} from "react-icons/fa";
import {IconContext} from "react-icons";

import SidebarItem from "./SidebarItem.jsx";

const Dropdown = ({title, communities}) => {
    const [open, setOpen] = useState(false);

    const renderCommunities = (items) => {
        return items.map((item, index) => (
            <SidebarItem
                key={index}
                link={item.link}
                community_icon={item.icon}
                community_name={item.community_name}
            />
        ));
    };

    return (
        <>
            <button className="sidebar-dropdown" onClick={() => setOpen(!open)}>
                <h4>{title}</h4>
                <IconContext.Provider
                    value={{
                        style: {
                            paddingLeft: "80px",
                            width: "100%",
                        },
                        size: "12px",
                    }}
                >
                    {open ? <FaMinus/> : <FaPlus/>}
                </IconContext.Provider>
            </button>

            {open && <ul>{communities ? renderCommunities(communities) : null}</ul>}
        </>
    );
};

export default Dropdown;
