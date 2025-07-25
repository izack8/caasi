import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/pages/Home.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;