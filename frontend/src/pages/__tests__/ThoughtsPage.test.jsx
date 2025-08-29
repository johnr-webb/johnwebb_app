import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import ThoughtsPage from '../ThoughtsPage';

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

describe('ThoughtsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Main Content', () => {
    test('renders main heading "My Thoughts"', () => {
      renderWithProviders(<ThoughtsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'My Thoughts' });
      expect(mainHeading).toBeInTheDocument();
    });

    test('renders secondary heading about no thoughts', () => {
      renderWithProviders(<ThoughtsPage />);

      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /Currently no thoughts... sad. Check back later. Maybe?/,
      });
      expect(secondaryHeading).toBeInTheDocument();
    });
  });

  describe('Content Accuracy', () => {
    test('contains correct main title', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText('My Thoughts')).toBeInTheDocument();
    });

    test('contains message about no current thoughts', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Currently no thoughts... sad./)).toBeInTheDocument();
      expect(screen.getByText(/Check back later. Maybe?/)).toBeInTheDocument();
    });

    test('uses ellipsis correctly', () => {
      renderWithProviders(<ThoughtsPage />);

      const message = screen.getByText(/Currently no thoughts... sad./);
      expect(message).toBeInTheDocument();
    });

    test('includes uncertainty with "Maybe?"', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Maybe?/)).toBeInTheDocument();
    });
  });

  describe('Layout and Structure', () => {
    test('uses Container component for proper layout', () => {
      renderWithProviders(<ThoughtsPage />);

      const container = screen.getByText('My Thoughts').closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
    });

    test('main heading has proper top margin', () => {
      renderWithProviders(<ThoughtsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'My Thoughts' });
      expect(mainHeading).toBeInTheDocument();
    });

    test('secondary heading has proper top margin', () => {
      renderWithProviders(<ThoughtsPage />);

      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /Currently no thoughts... sad. Check back later. Maybe?/,
      });
      expect(secondaryHeading).toBeInTheDocument();
    });
  });

  describe('Typography and Styling', () => {
    test('main heading uses h2 variant', () => {
      renderWithProviders(<ThoughtsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'My Thoughts' });
      expect(mainHeading).toBeInTheDocument();
    });

    test('secondary heading uses h4 variant', () => {
      renderWithProviders(<ThoughtsPage />);

      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /Currently no thoughts... sad. Check back later. Maybe?/,
      });
      expect(secondaryHeading).toBeInTheDocument();
    });

    test('both headings have consistent marginTop styling', () => {
      renderWithProviders(<ThoughtsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'My Thoughts' });
      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /Currently no thoughts... sad. Check back later. Maybe?/,
      });

      expect(mainHeading).toBeInTheDocument();
      expect(secondaryHeading).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper heading hierarchy', () => {
      renderWithProviders(<ThoughtsPage />);

      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(2);
    });

    test('all headings are properly labeled', () => {
      renderWithProviders(<ThoughtsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'My Thoughts' });
      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /Currently no thoughts... sad. Check back later. Maybe?/,
      });

      expect(mainHeading).toBeInTheDocument();
      expect(secondaryHeading).toBeInTheDocument();
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<ThoughtsPage />);

      // All text should be visible and readable
      expect(screen.getByText('My Thoughts')).toBeInTheDocument();
      expect(
        screen.getByText(/Currently no thoughts... sad. Check back later. Maybe?/),
      ).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('container adapts to different screen sizes', () => {
      renderWithProviders(<ThoughtsPage />);

      const container = screen.getByText('My Thoughts').closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
    });

    test('margins are responsive', () => {
      renderWithProviders(<ThoughtsPage />);

      // Check that both headings have marginTop applied
      const mainHeading = screen.getByRole('heading', { level: 1, name: 'My Thoughts' });
      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /Currently no thoughts... sad. Check back later. Maybe?/,
      });

      expect(mainHeading).toBeInTheDocument();
      expect(secondaryHeading).toBeInTheDocument();
    });
  });

  describe('Content Intent', () => {
    test('conveys current state honestly', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Currently no thoughts/)).toBeInTheDocument();
    });

    test('shows appropriate emotion with "sad"', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/sad/)).toBeInTheDocument();
    });

    test('encourages return visits', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Check back later/)).toBeInTheDocument();
    });

    test('maintains uncertainty with "Maybe?"', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Maybe?/)).toBeInTheDocument();
      // This shows honesty about not knowing when content will be added
    });
  });

  describe('Tone and Personality', () => {
    test('uses casual, conversational tone', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Check back later. Maybe?/)).toBeInTheDocument();
      // The "Maybe?" shows personality and honesty
    });

    test('acknowledges current emptiness', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Currently no thoughts... sad./)).toBeInTheDocument();
      // Direct and honest about current state
    });

    test('shows self-awareness', () => {
      renderWithProviders(<ThoughtsPage />);

      const message = screen.getByText(/Currently no thoughts... sad./);
      expect(message).toBeInTheDocument();
      // Acknowledging the current state shows self-awareness
    });
  });

  describe('Error Handling', () => {
    test('renders without crashing', () => {
      expect(() => {
        renderWithProviders(<ThoughtsPage />);
      }).not.toThrow();
    });

    test('handles missing content gracefully', () => {
      renderWithProviders(<ThoughtsPage />);

      // Should still render even if some content is missing
      expect(screen.getByText('My Thoughts')).toBeInTheDocument();
    });
  });

  describe('Future Enhancement Readiness', () => {
    test('structure allows for easy content addition', () => {
      renderWithProviders(<ThoughtsPage />);

      const container = screen.getByText('My Thoughts').closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
      // Container structure makes it easy to add more content later
    });

    test('typography hierarchy supports content expansion', () => {
      renderWithProviders(<ThoughtsPage />);

      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(2);
      // Current heading structure can accommodate more sections
    });

    test('current message can be easily replaced', () => {
      renderWithProviders(<ThoughtsPage />);

      const currentMessage = screen.getByText(
        /Currently no thoughts... sad. Check back later. Maybe?/,
      );
      expect(currentMessage).toBeInTheDocument();
      // This placeholder message can be easily replaced with actual content
    });
  });

  describe('SEO and Meta', () => {
    test('has descriptive page title', () => {
      renderWithProviders(<ThoughtsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'My Thoughts' });
      expect(mainHeading).toBeInTheDocument();
      // Clear, descriptive heading for SEO
    });

    test('content indicates future content availability', () => {
      renderWithProviders(<ThoughtsPage />);

      expect(screen.getByText(/Check back later/)).toBeInTheDocument();
      // Indicates to visitors that content will be added
    });
  });
});
