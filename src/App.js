import './App.css';
import Navigation from './components/Navigation';
import Register from './components/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LogIn from './components/Login/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Test from './components/test/test';
import RequireAuth from './components/ProtectedRoute/RequireAuth';
import Home from './components/Home/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<RequireAuth>
            <Test />
          </RequireAuth>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
