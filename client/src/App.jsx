import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactDOM } from "react";
import "./App.css";
// import Home from "../pages/Home";
export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-[100em]"></div>
        <Footer />
        {/* <Home /> */}
      </div>
    </>
  );
}