import { Outlet } from "react-router";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
