import { useLocation } from 'react-router-dom';
import { Navigation } from './features/navigation/components/Navigation';
import Footer from './features/footer/components/Footer';
import { AppRoutes } from './router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import appTheme from './theme';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const location = useLocation();

  const showFooterPaths = ['/'];

  const shouldRenderFooter = showFooterPaths.includes(location.pathname);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation />
          <Box component="main" sx={{ margin: '0 auto', width: '100%' }}>
            <AppRoutes />
          </Box>
          {shouldRenderFooter && <Footer />}
        </Box>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
