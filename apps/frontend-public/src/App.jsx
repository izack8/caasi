import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/components/Layout.jsx';
import AboutPage from './app/pages/AboutPage.jsx';
import WorkPage from './app/pages/WorkPage.jsx';
import WritingsPage from './app/pages/WritingsPage.jsx';
import ChatPage from './app/pages/ChatPage.jsx';
import Post from './app/pages/subpages/Post.jsx';
import Project from './app/pages/subpages/Project.jsx';
import NotFound from './app/pages/subpages/NotFound.jsx';
import './App.css';

function App() {
 
  return (
    <Router>
      <div className="App">
        <div className="mx-auto lg:min-h-screen max-w-screen-xl lg:px-12 h-screen lg:h-auto">
          <div className="w-full lg:h-full lg:flex lg:flex-row lg:gap-x-8">
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/writings" element={<WritingsPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/writings/posts/:id" element={<Post />} />
                <Route path="/work/projects/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;