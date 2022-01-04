import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ClassDetails from "./components/ClassDetails/ClassDetails";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import Schedule from "./components/Schedule/Schedule";
import TrainingServices from "./components/TrainingServices/TrainingServices";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/trainingservices" element={<TrainingServices></TrainingServices>}></Route>
          <Route path="/classdetails" element={<ClassDetails></ClassDetails>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/schedule" element={<Schedule></Schedule>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
