import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/pages/Home.jsx';
import Post from './app/pages/Post.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing/:id" element={<Post />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;