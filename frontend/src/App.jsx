import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './features/navigation/components/Navigation';
import { AppRoutes } from './router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import appTheme from './theme';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Navigation />
          <main className="main-content">
            <AppRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
