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
import LogIn from './components/Login/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';
import RequireAuth from './components/ProtectedRoute/RequireAuth';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrder from './components/Dashboard/MyOrder';
import ScrollToTop from 'react-scroll-to-top';

function App() {
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
          <Route path="/classdetails" element={<TrainingServices />}></Route>
          <Route path="/trainingservices" element={<ClassDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route path="/dashboard" element={<MyOrder />} />
            <Route path="/dashboard/manageproducts" element={<ManageProducts />} />
            <Route path="/dashboard/addproduct" element={<AddProduct />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
