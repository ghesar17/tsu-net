import { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext.jsx";

const PostForm = () => {
  const { dispatch } = useUsersContext();
  const [profession, setProfession] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { profession, phoneNumber, load };

    const response = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setProfession("");
      setPhoneNumber("");
      setLoad("");
      setError(null);
      console.log("new user added", json);
      dispatch({ type: "CREATE_USER", payload: json });
    }
  };

  return (
    <>
      <form className={"create"} onSubmit={handleSubmit}>
        <h3>Add new user</h3>

        <label> Profession </label>
        <input
          type={"text"}
          onChange={(e) => setProfession(e.target.value)}
          value={profession}
        />

        <label> Phone Number </label>
        <input
          type={"number"}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />

        <label> Load </label>
        <input
          type={"number"}
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
        <button> Add User</button>
        {error && <div className={"error"}>{error}</div>}
      </form>
    </>
  );
};
export default PostForm;
