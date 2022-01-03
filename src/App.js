import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
      <Register />
    </div>
  );
}

export default App;
