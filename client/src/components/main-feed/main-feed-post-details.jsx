const PostDetails = ({ post }) => {
  return (
    <div className={"post-details"}>
      <h4> {post.user_name}</h4>
      <p>{post.content}</p>
      <p>{post.likes}</p>
      <p>{post.comments}</p>
    </div>
  );
};
export default PostDetails;
