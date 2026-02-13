import { Outlet } from "react-router-dom";
const Post = () => {
  return (
    <>
      <h3>Post 頁面</h3>
      <Outlet />
    </>
  );
};

export default Post;