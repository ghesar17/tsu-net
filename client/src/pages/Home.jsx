// components
import Navbar from "../components/Navbar.jsx";
import LeftSidebar from "../components/LeftSidebar/SidebarContainer.jsx";
import MainFeedContainer from "../components/MainFeed/MainFeedContainer.jsx";

// hooks
// import { useUsersContext } from "../hooks/useUsersContext.jsx";

import "../App.css";

const Home = () => {
  return (
    <div className={"app-container"}>
      <Navbar />
      <LeftSidebar />
      <MainFeedContainer />
    </div>
  );
};
export default Home;
