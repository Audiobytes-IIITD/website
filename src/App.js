import './App.css';
import NavBar from './components/NavBar';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mt-16">
        <Join />
      </div>
    </div>
  );
}

export default App;
