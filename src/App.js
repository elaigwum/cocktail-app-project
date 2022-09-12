import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Cocktail from "./Pages/Cocktail";

//import Product from "./Pages/Product";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cocktail/:id" element={<Cocktail />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}
