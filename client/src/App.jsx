import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme.js";
import { ThemeProvider } from "@mui/material";

// pages and components
import Home from "./pages/Home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PopularPosts from "./pages/PopularPosts.jsx";
import NotFound from "./pages/NotFound.jsx";
import CreateCommunity from "./pages/CreateCommunity.jsx";
import Community from "./pages/Community.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={themeSettings}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path={"/community"} element={<Community />} />
            <Route path={"/create-community"} element={<CreateCommunity />} />
            <Route path={"/popular"} element={<PopularPosts />} />
            <Route path={"/not-found"} element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
