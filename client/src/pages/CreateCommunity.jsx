import {useState} from "react";

// components
import Navbar from "../components/Navbar.jsx";
import LeftSidebar from "../components/LeftSidebar/SidebarContainer.jsx";


import "../styles/community-form.css";

const CreateCommunity = () => {

    const [community_name, setName] = useState("");
    const [icon, setIcon] = useState(null);
    const [banner, setBanner] = useState(null);
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const community = {community_name, icon, banner, description};

        const response = await fetch("http://localhost:9000/api/communities", {
            method: "POST",
            body: JSON.stringify(community),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setName("");
            setIcon(null);
            setBanner(null);
            setDescription("");
            setError(null);
        }
    };

    return (
        <div className={"app-container"}>
            <Navbar/>
            <LeftSidebar/>

            <form className={"community-form"} onSubmit={handleSubmit}>
                <h3>Create new community</h3>

                <label> Name </label>
                <input
                    type={"text"}
                    onChange={(e) => setName(e.target.value)}
                    value={community_name}
                    spellCheck={false}
                />

                <label> Icon </label>
                <input
                    type={"file"}
                    onChange={(e) => setIcon(e.target.value)}
                    value={icon}
                    spellCheck={false}
                />

                <label> Banner </label>
                <input
                    type={"file"}
                    onChange={(e) => setBanner(e.target.value)}
                    value={banner}
                    spellCheck={false}
                />

                <label> Description </label>
                <input
                    type={"text"}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    spellCheck={false}
                />
                <button> 🔥🔥🔥 Add Community! 🔥🔥🔥</button>
                {error && <div className={"error"}>{error}</div>}
            </form>

        </div>
    );
};

export default CreateCommunity;
