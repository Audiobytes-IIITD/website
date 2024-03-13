import './App.css';
import NavBar from './components/NavBar';
import Join from '../src/pages/Join/join';
import Members from '../src/pages/Members/Members';
import About from '../src/pages/About/About';
import Home from '../src/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mt-16">
        <Home />
        <About />
        <Members />
        <Join />
      </div>
    </div>
  );
}

export default App;
