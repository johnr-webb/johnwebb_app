import { useLocation } from 'react-router-dom';
import { Navigation } from './features/navigation/components/Navigation';
import Footer from './features/footer/components/Footer';
import { AppRoutes } from './router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import appTheme from './theme';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function App() {
  const location = useLocation();

  const showFooterPaths = ['/'];

  const shouldRenderFooter = showFooterPaths.includes(location.pathname);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <div className="app-container">
          <Navigation />
          <main className="main-content">
            <AppRoutes />
          </main>
          {shouldRenderFooter && <Footer />}
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
