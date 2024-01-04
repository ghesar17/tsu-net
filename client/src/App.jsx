import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages and components

import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";

import './App.css'

function App() {

  return (
    <>
        <div className='App'>
            <BrowserRouter>
                <Navbar/>
                <div className={"pages"}>
                    <Routes>
                        <Route path={"/"}
                               // element={<Home/>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
