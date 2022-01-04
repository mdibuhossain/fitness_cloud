import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import ClassDetails from "./components/ClassDetails/ClassDetails";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Schedule from "./components/Schedule/Schedule";
import TrainingServices from "./components/TrainingServices/TrainingServices";
import "./App.css";
import Navigation from "./components/Navigation";
import Register from "./components/Register/Register";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RequireAuth from "./components/ProtectedRoute/RequireAuth";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import AddProduct from "./components/Dashboard/AddProduct";
import ManageProducts from "./components/Dashboard/ManageProducts";
import ManageOrders from "./components/Dashboard/ManageOrders";
import LogIn from "./components/Login/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route
            path="/trainingservices"
            element={<TrainingServices></TrainingServices>}
          ></Route>
          <Route
            path="/classdetails"
            element={<ClassDetails></ClassDetails>}
          ></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/schedule" element={<Schedule></Schedule>}></Route>

          <Route
            path="/home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/trainingservices"
            element={
              <>
                <TrainingServices />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <LogIn></LogIn>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route path="/dashboard" element={<ManageOrders />} />
            <Route
              path="/dashboard/manageproducts"
              element={<ManageProducts />}
            />
            <Route path="/dashboard/addproduct" element={<AddProduct />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
