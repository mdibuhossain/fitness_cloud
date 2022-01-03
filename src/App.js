import './App.css';
import Navigation from './components/Navigation';
import Register from './components/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LogIn from './components/Login/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
