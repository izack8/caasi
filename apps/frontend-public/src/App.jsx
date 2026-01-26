import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/pages/Home.jsx';
import Post from './app/pages/Post.jsx';
import Project from './app/pages/Project.jsx';
import NotFound from './app/pages/NotFound.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing/:id" element={<Post />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;