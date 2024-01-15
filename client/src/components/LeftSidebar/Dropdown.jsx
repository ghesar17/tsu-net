import { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";

import SidebarItem from "./SidebarItem.jsx";

const Dropdown = ({ title, communities, submenu }) => {
  const [open, setOpen] = useState(false);

  const renderItems = (items) => {
    return items.map((item, index) => (
      <SidebarItem
        key={index}
        link={item.link}
        icon={item.icon}
        text={item.name}
      />
    ));
  };

  return (
    <>
      <button className="sidebar-dropdown" onClick={() => setOpen(!open)}>
        <h4>{title}</h4>
        <IconContext.Provider
          value={{ style: { paddingLeft: "40px" }, size: "12px" }}
        >
          {open ? <FaMinus /> : <FaPlus />}
        </IconContext.Provider>
      </button>

      {open && (
        <ul>
          {communities ? renderItems(communities) : null}
          {submenu &&
            submenu.map((item, index) => (
              <Dropdown
                key={index}
                title={item.title}
                communities={item.communities}
                submenu={item.submenu}
              />
            ))}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
