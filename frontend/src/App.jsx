import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UsersPage from './features/users/pages/UsersPage';
import PostsPage from './features/posts/pages/PostsPage';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/home')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>"Hello World"</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/users">Users</Link> |
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
