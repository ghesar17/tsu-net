import {Link} from "react-router-dom";
import {IconContext} from "react-icons";

const SidebarItem = ({link, icon, community_icon, community_name, title}) => {
    console.log(community_icon)
    return (
        <li>
            <Link className={"sidebar-item"} to={link}>
                {icon ? <IconContext.Provider
                        value={{style: {paddingRight: "15px"}, size: "20px"}}
                    >
                        {icon}
                    </IconContext.Provider> :
                    <img src={`http://localhost:9000/${community_icon}`} alt={"icon"}/>}
                {community_name}
                {title}
            </Link>
        </li>
    );
};
export default SidebarItem;
