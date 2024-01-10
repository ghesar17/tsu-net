import { useEffect, useState } from "react";

import "../../styles/main-feed/mainfeed-post.css";
import PostDetails from "./main-feed-post-details.jsx";

const MainFeedContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts/nycSHRIKE");
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className={"main-feed-container"}>
      {posts && posts.map((post) => <PostDetails key={post._id} post={post} />)}
    </div>
  );
};
export default MainFeedContainer;
