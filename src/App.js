import './App.css';
import Navigation from './components/Navigation';
import Register from './components/Register/Register';
import About from "./components/About/About";
import ClassDetails from "./components/ClassDetails/ClassDetails";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Schedule from "./components/Schedule/Schedule";
import TrainingServices from "./components/TrainingServices/TrainingServices";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import RequireAuth from './components/ProtectedRoute/RequireAuth';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrder from './components/Dashboard/MyOrder';
import ScrollToTop from 'react-scroll-to-top';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCourses } from './features/coursesSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `https://radiant-tor-26949.herokuapp.com/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setCourses(data)));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop smooth />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trainingservices" element={<TrainingServices />} />
          <Route path="/classdetails/:_id" element={
            <RequireAuth>
              <ClassDetails />
            </RequireAuth>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route path="/dashboard" element={<MyOrder />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
