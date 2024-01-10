// components
import NavBar from "../components/navbar.jsx";
import LeftSidebar from "../components/left-sidebar/sidebar-container.jsx";
import MainFeedContainer from "../components/main-feed/main-feed-container.jsx";

// hooks
// import { useUsersContext } from "../hooks/useUsersContext.jsx";

import "../App.css";

const Home = () => {
  return (
    <div className={"app-container"}>
      <NavBar />
      <LeftSidebar />
      <MainFeedContainer />
    </div>
  );
};
export default Home;
