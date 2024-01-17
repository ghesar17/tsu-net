import { useEffect, useState } from "react";

import PostDetails from "./PostDetails.jsx";

import "../../styles/main-feed-container.css";

const MainFeedContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts/");
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };
    fetchPosts();
  }, []);

  if (posts === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={"main-feed-container"}>
      {posts && posts.map((post) => <PostDetails key={post._id} post={post} />)}
    </div>
  );
};
export default MainFeedContainer;
