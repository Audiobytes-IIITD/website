import './App.css';
import NavBar from './components/NavBar';
import Join from './pages/Join';
import Members from './pages/Members';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mt-16">
        <Members />
        <Join />
      </div>
    </div>
  );
}

export default App;
