import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './features/navigation/components/Navigation';
import { AppRoutes } from './router';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;