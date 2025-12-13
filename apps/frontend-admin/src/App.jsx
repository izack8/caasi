import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import PostPage from './components/PostPage.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './App.css'
import { AuthProvider } from './components/contexts/AuthContext.jsx';

function App() {

  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/writing/new" element={
              <ProtectedRoute>
                <PostPage />
              </ProtectedRoute>
            } />
            <Route path="/writing/:id" element={
              <ProtectedRoute>
                <PostPage />
              </ProtectedRoute>
            } />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
  )
}

export default App
