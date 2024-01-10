import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/home.jsx";
import PopularPosts from "./pages/popular-posts.jsx";
import NotFound from "./pages/not-found.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/popular"} element={<PopularPosts />} />
            <Route path={"/not-found"} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
