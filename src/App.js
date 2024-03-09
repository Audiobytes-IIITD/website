import './App.css';
import NavBar from './components/NavBar';
import Join from './pages/join';
import Members from './pages/Members';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mt-16">
        <Home />
        <Members />
        <Join />
      </div>
    </div>
  );
}

export default App;
