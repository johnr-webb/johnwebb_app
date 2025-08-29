import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import HomePage from '../HomePage';

// Mock the image import
vi.mock('../../assets/mountain-view-vail.jpeg', () => ({
  default: 'mocked-image-path',
}));

// Create a basic theme for testing
const theme = createTheme();

// Wrapper component to provide necessary context
const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>,
  );
};

describe('HomePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Hero Section', () => {
    test('renders hero section with correct title', () => {
      renderWithProviders(<HomePage />);

      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Welcome to John Webb dot com');
    });

    test('renders hero section with correct subtitle', () => {
      renderWithProviders(<HomePage />);

      const subtitle = screen.getByText('An evolving space for projects, thoughts, and more!');
      expect(subtitle).toBeInTheDocument();
    });

    test('hero section has correct background image', () => {
      renderWithProviders(<HomePage />);

      const heroSection = screen.getByText('Welcome to John Webb dot com').closest('div');
      expect(heroSection).toHaveStyle({
        backgroundImage: 'url(mocked-image-path)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      });
    });

    test('hero section has correct styling properties', () => {
      renderWithProviders(<HomePage />);

      const heroSection = screen.getByText('Welcome to John Webb dot com').closest('div');
      expect(heroSection).toHaveStyle({
        height: '75vh',
        color: 'rgb(255, 255, 255)', // Browser converts 'white' to rgb
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        textAlign: 'center',
      });
    });
  });

  describe('Disclaimer Section', () => {
    test('renders disclaimer section with correct title', () => {
      renderWithProviders(<HomePage />);

      const disclaimerTitle = screen.getByRole('heading', { level: 2, name: 'Disclaimer!' });
      expect(disclaimerTitle).toBeInTheDocument();
    });

    test('renders disclaimer text with complaints link', () => {
      renderWithProviders(<HomePage />);

      const disclaimerText = screen.getByText(/There may frequently be broken links/);
      expect(disclaimerText).toBeInTheDocument();

      const complaintsLink = screen.getByRole('link', { name: 'complaints' });
      expect(complaintsLink).toBeInTheDocument();
      expect(complaintsLink).toHaveAttribute('href', '/complaints');
    });

    test('disclaimer section has correct styling', () => {
      renderWithProviders(<HomePage />);

      const disclaimerPaper = screen.getByText('Disclaimer!').closest('[class*="MuiPaper-root"]');
      expect(disclaimerPaper).toBeInTheDocument();
    });
  });

  describe('Projects Section', () => {
    test('renders projects section with correct title', () => {
      renderWithProviders(<HomePage />);

      const projectsTitle = screen.getByRole('heading', {
        level: 2,
        name: 'Experiments & Projects',
      });
      expect(projectsTitle).toBeInTheDocument();
    });

    test('renders projects description text', () => {
      renderWithProviders(<HomePage />);

      const description = screen.getByText(/Explore my portfolio of work/);
      expect(description).toBeInTheDocument();
    });

    test('renders projects button with correct link', () => {
      renderWithProviders(<HomePage />);

      const projectsButton = screen.getByRole('link', { name: 'View Projects' });
      expect(projectsButton).toBeInTheDocument();
      expect(projectsButton).toHaveAttribute('href', '/projects');
    });

    test('projects section has correct styling', () => {
      renderWithProviders(<HomePage />);

      const projectsPaper = screen
        .getByText('Experiments & Projects')
        .closest('[class*="MuiPaper-root"]');
      expect(projectsPaper).toBeInTheDocument();
    });
  });

  describe('Thoughts Section', () => {
    test('renders thoughts section with correct title', () => {
      renderWithProviders(<HomePage />);

      const thoughtsTitle = screen.getByRole('heading', { level: 2, name: 'My Thoughts' });
      expect(thoughtsTitle).toBeInTheDocument();
    });

    test('renders thoughts description text', () => {
      renderWithProviders(<HomePage />);

      const description = screen.getByText(/My thoughts on my technological journey/);
      expect(description).toBeInTheDocument();
    });

    test('renders thoughts button with correct link', () => {
      renderWithProviders(<HomePage />);

      const thoughtsButton = screen.getByRole('link', { name: 'Read My Thoughts' });
      expect(thoughtsButton).toBeInTheDocument();
      expect(thoughtsButton).toHaveAttribute('href', '/my-thoughts');
    });

    test('thoughts section has correct styling', () => {
      renderWithProviders(<HomePage />);

      const thoughtsPaper = screen.getByText('My Thoughts').closest('[class*="MuiPaper-root"]');
      expect(thoughtsPaper).toBeInTheDocument();
    });
  });

  describe('Layout and Structure', () => {
    test('renders main container with correct spacing', () => {
      renderWithProviders(<HomePage />);

      // Find the container by looking for the main content wrapper
      const mainContent = screen.getByText('Disclaimer!').closest('[class*="MuiBox-root"]');
      expect(mainContent).toBeInTheDocument();
    });

    test('uses correct Grid layout structure', () => {
      renderWithProviders(<HomePage />);

      // Should have Grid container with spacing
      const gridContainer = screen.getByText('Disclaimer!').closest('[class*="MuiGrid-container"]');
      expect(gridContainer).toBeInTheDocument();
    });

    test('disclaimer takes full width', () => {
      renderWithProviders(<HomePage />);

      const disclaimerGrid = screen.getByText('Disclaimer!').closest('[class*="MuiGrid-root"]');
      expect(disclaimerGrid).toBeInTheDocument();
    });

    test('projects and thoughts sections are side by side on larger screens', () => {
      renderWithProviders(<HomePage />);

      const projectsGrid = screen
        .getByText('Experiments & Projects')
        .closest('[class*="MuiGrid-root"]');
      const thoughtsGrid = screen.getByText('My Thoughts').closest('[class*="MuiGrid-root"]');

      expect(projectsGrid).toBeInTheDocument();
      expect(thoughtsGrid).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper heading hierarchy', () => {
      renderWithProviders(<HomePage />);

      const h1 = screen.getByRole('heading', { level: 1 });
      const h2s = screen.getAllByRole('heading', { level: 2 });

      expect(h1).toBeInTheDocument();
      expect(h2s).toHaveLength(3); // Disclaimer, Projects, Thoughts
    });

    test('all links have proper href attributes', () => {
      renderWithProviders(<HomePage />);

      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('href');
      });
    });

    test('images have alt text', () => {
      renderWithProviders(<HomePage />);

      // The hero section background image should be accessible
      const heroSection = screen.getByText('Welcome to John Webb dot com').closest('div');
      expect(heroSection).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('hero section has responsive padding', () => {
      renderWithProviders(<HomePage />);

      const heroSection = screen.getByText('Welcome to John Webb dot com').closest('div');
      expect(heroSection).toHaveStyle({
        paddingTop: '5vh',
        paddingLeft: '25vw',
      });
    });

    test('main content has responsive spacing', () => {
      renderWithProviders(<HomePage />);

      const mainContent = screen.getByText('Disclaimer!').closest('[class*="MuiBox-root"]');
      expect(mainContent).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    test('renders without crashing when image fails to load', () => {
      // Mock image loading failure
      const originalImage = global.Image;
      global.Image = class {
        constructor() {
          setTimeout(() => this.onerror(), 0);
        }
      };

      expect(() => {
        renderWithProviders(<HomePage />);
      }).not.toThrow();

      global.Image = originalImage;
    });
  });
});
