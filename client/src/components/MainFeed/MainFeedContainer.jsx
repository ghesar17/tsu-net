import { useEffect, useState } from "react";

import "../../styles/main-feed/mainfeed-post.css";
import PostDetails from "./PostDetails.jsx";

const MainFeedContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "http://localhost:4000/api/posts/65a5ca108b1e4523707b5eec",
      );
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
      {/*  {posts && posts.map((post) => <PostDetails key={post._id} post={post} />)}*/}
      <PostDetails post={posts} />
    </div>
  );
};
export default MainFeedContainer;
