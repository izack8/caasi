import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './app/components/Layout.jsx';
import HomePage from './app/pages/HomePage.jsx';
import AboutPage from './app/pages/AboutPage.jsx';
import WorkPage from './app/pages/WorkPage.jsx';
import WritingsPage from './app/pages/WritingsPage.jsx';
import FavThingsPage from './app/pages/FavThingsPage.jsx';
import ChatPage from './app/pages/ChatPage.jsx';
import Post from './app/pages/subpages/Post.jsx';
import Project from './app/pages/subpages/Project.jsx';
import NotFound from './app/pages/subpages/NotFound.jsx';
import './App.css';

function App() {
  // Detect Windows for custom scrollbar
  useEffect(() => {
    const isWindows = navigator.platform.toLowerCase().includes('win');
    if (isWindows) {
      document.documentElement.classList.add('windows');
    }
  }, []);
 
  return (
    
      <div className="App">

        <div className="mx-auto lg:min-h-screen max-w-screen-xl lg:px-12 h-screen lg:h-auto">

          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/writings" element={<WritingsPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/favorites" element={<FavThingsPage />} />
                <Route path="/writings/posts/:id" element={<Post />} />
                <Route path="/work/projects/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
          
        </div>
        
      </div>
 
  );
}

export default App;