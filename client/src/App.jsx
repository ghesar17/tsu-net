import { BrowserRouter, Routes, Route } from "react-router-dom";

// import theme

// pages and components
import Home from "./pages/Home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PopularPosts from "./pages/PopularPosts.jsx";
import NotFound from "./pages/NotFound.jsx";
import CreateCommunity from "./pages/CreateCommunity.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/profile"} element={<ProfilePage />} />
            <Route path={"/create-community"} element={<CreateCommunity />} />
            <Route path={"/popular"} element={<PopularPosts />} />
            <Route path={"/not-found"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
