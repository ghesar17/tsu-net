import {useState} from "react";

import Navbar from "../components/Navbar.jsx";
import LeftSidebar from "../components/LeftSidebar/SidebarContainer.jsx";

import "../styles/community-form.css";

const CreateCommunity = () => {

    const [community_name, setCommunityName] = useState("");
    const [icon, setIcon] = useState(null);
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('community_name', community_name);
        formData.append('icon', icon);
        formData.append('description', description);

        const response = await fetch("http://localhost:9000/api/communities", {
            method: "POST",
            body: formData,
        });

        const community = await response.json();

        if (!response.ok) {
            setError(community.error);
        }
        if (response.ok) {
            setCommunityName("");
            setIcon(null);
            setDescription("");
            setError(null);
        }
    };

    return (
        <div className={"app-container"}>
            <Navbar/>
            <LeftSidebar/>

            <form className={"community-form"} encType="multipart/form-data" onSubmit={handleSubmit}>
                <h3>Create new community</h3>

                <label> Name </label>
                <input
                    type={"text"}
                    onChange={(e) => setCommunityName(e.target.value)}
                    value={community_name}
                    name="community_name"
                    spellCheck={false}
                />

                <label> Icon </label>
                <input
                    type={"file"}
                    onChange={(e) => setIcon(e.target.files[0])}
                    name="icon" // The name attribute should be the key expected on the server
                />
                <label> Description </label>
                <input
                    type={"text"}
                    onChange={(e) => setDescription(e.target.value)} // Use files[0] to get the File object
                    value={description}
                    name="description" // The name attribute should be the key expected on the server
                />
                <button> 🔥🔥🔥 Add Community! 🔥🔥🔥</button>
                {error && <div className={"error"}>{error}</div>}
            </form>
        </div>
    );
};

export default CreateCommunity;
