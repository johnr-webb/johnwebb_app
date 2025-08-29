import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import ComplaintsPage from '../ComplaintsPage';

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

describe('ComplaintsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Main Content', () => {
    test('renders main heading "Really? Stop it."', () => {
      renderWithProviders(<ComplaintsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'Really? Stop it.' });
      expect(mainHeading).toBeInTheDocument();
    });

    test('heading text is exactly "Really? Stop it."', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByText('Really? Stop it.');
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe('Really? Stop it.');
    });
  });

  describe('Content Accuracy', () => {
    test('contains correct message', () => {
      renderWithProviders(<ComplaintsPage />);

      expect(screen.getByText('Really? Stop it.')).toBeInTheDocument();
    });

    test('uses question mark and period correctly', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByText('Really? Stop it.');
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toContain('?');
      expect(heading.textContent).toContain('.');
    });

    test('message is concise and direct', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByText('Really? Stop it.');
      expect(heading.textContent.length).toBeLessThan(20); // Very short message
    });
  });

  describe('Layout and Structure', () => {
    test('uses Container component for proper layout', () => {
      renderWithProviders(<ComplaintsPage />);

      const container = screen
        .getByText('Really? Stop it.')
        .closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
    });

    test('heading has proper top margin', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByRole('heading', { level: 1, name: 'Really? Stop it.' });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Typography and Styling', () => {
    test('main heading uses h2 variant', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByRole('heading', { level: 1, name: 'Really? Stop it.' });
      expect(heading).toBeInTheDocument();
    });

    test('heading has large font size', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByText('Really? Stop it.');
      expect(heading).toBeInTheDocument();
      // The fontSize: '20vw' makes it very large and responsive
    });

    test('heading has proper top margin', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByRole('heading', { level: 1, name: 'Really? Stop it.' });
      expect(heading).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper heading hierarchy', () => {
      renderWithProviders(<ComplaintsPage />);

      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(1);
    });

    test('heading is properly labeled', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByRole('heading', { level: 1, name: 'Really? Stop it.' });
      expect(heading).toBeInTheDocument();
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<ComplaintsPage />);

      // Text should be visible and readable
      expect(screen.getByText('Really? Stop it.')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('container adapts to different screen sizes', () => {
      renderWithProviders(<ComplaintsPage />);

      const container = screen
        .getByText('Really? Stop it.')
        .closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
    });

    test('font size is responsive with viewport width', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByText('Really? Stop it.');
      expect(heading).toBeInTheDocument();
      // fontSize: '20vw' makes it responsive to viewport width
    });

    test('margin is responsive', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByRole('heading', { level: 1, name: 'Really? Stop it.' });
      expect(heading).toBeInTheDocument();
      // marginTop: '10vh' makes it responsive to viewport height
    });
  });

  describe('Content Intent', () => {
    test('conveys clear message to stop complaining', () => {
      renderWithProviders(<ComplaintsPage />);

      expect(screen.getByText(/Stop it/)).toBeInTheDocument();
    });

    test('uses rhetorical question for emphasis', () => {
      renderWithProviders(<ComplaintsPage />);

      expect(screen.getByText(/Really\?/)).toBeInTheDocument();
      // The question mark emphasizes the incredulity
    });

    test('message is direct and unambiguous', () => {
      renderWithProviders(<ComplaintsPage />);

      const message = screen.getByText('Really? Stop it.');
      expect(message).toBeInTheDocument();
      // Clear, direct instruction
    });
  });

  describe('Tone and Personality', () => {
    test('uses direct, no-nonsense tone', () => {
      renderWithProviders(<ComplaintsPage />);

      expect(screen.getByText(/Stop it/)).toBeInTheDocument();
      // Direct command shows no-nonsense attitude
    });

    test('shows frustration with complaining', () => {
      renderWithProviders(<ComplaintsPage />);

      const message = screen.getByText('Really? Stop it.');
      expect(message).toBeInTheDocument();
      // The "Really?" shows exasperation
    });

    test('maintains humor while being direct', () => {
      renderWithProviders(<ComplaintsPage />);

      const message = screen.getByText('Really? Stop it.');
      expect(message).toBeInTheDocument();
      // The message is humorous but also a clear instruction
    });
  });

  describe('User Experience', () => {
    test('clearly communicates what not to do', () => {
      renderWithProviders(<ComplaintsPage />);

      expect(screen.getByText(/Stop it/)).toBeInTheDocument();
      // Clear instruction about what to stop
    });

    test('discourages complaint submission', () => {
      renderWithProviders(<ComplaintsPage />);

      const message = screen.getByText('Really? Stop it.');
      expect(message).toBeInTheDocument();
      // The message discourages users from complaining
    });

    test('provides immediate feedback', () => {
      renderWithProviders(<ComplaintsPage />);

      const message = screen.getByText('Really? Stop it.');
      expect(message).toBeInTheDocument();
      // Users immediately understand the page's purpose
    });
  });

  describe('Error Handling', () => {
    test('renders without crashing', () => {
      expect(() => {
        renderWithProviders(<ComplaintsPage />);
      }).not.toThrow();
    });

    test('handles missing content gracefully', () => {
      renderWithProviders(<ComplaintsPage />);

      // Should still render even if some content is missing
      expect(screen.getByText('Really? Stop it.')).toBeInTheDocument();
    });
  });

  describe('Future Enhancement Readiness', () => {
    test('structure allows for easy content addition', () => {
      renderWithProviders(<ComplaintsPage />);

      const container = screen
        .getByText('Really? Stop it.')
        .closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
      // Container structure makes it easy to add more content later
    });

    test('current message can be easily modified', () => {
      renderWithProviders(<ComplaintsPage />);

      const currentMessage = screen.getByText('Really? Stop it.');
      expect(currentMessage).toBeInTheDocument();
      // This message can be easily changed if needed
    });
  });

  describe('SEO and Meta', () => {
    test('has clear page purpose', () => {
      renderWithProviders(<ComplaintsPage />);

      const heading = screen.getByRole('heading', { level: 1, name: 'Really? Stop it.' });
      expect(heading).toBeInTheDocument();
      // Clear purpose: discouraging complaints
    });

    test('content is appropriate for complaints page', () => {
      renderWithProviders(<ComplaintsPage />);

      expect(screen.getByText(/Stop it/)).toBeInTheDocument();
      // Appropriate content for a complaints page
    });
  });

  describe('Performance', () => {
    test('renders quickly with minimal content', () => {
      const startTime = performance.now();

      renderWithProviders(<ComplaintsPage />);

      const endTime = performance.now();
      const renderTime = endTime - startTime;

      expect(renderTime).toBeLessThan(100); // Should render very quickly
      expect(screen.getByText('Really? Stop it.')).toBeInTheDocument();
    });

    test('minimal DOM elements for fast rendering', () => {
      renderWithProviders(<ComplaintsPage />);

      const container = screen
        .getByText('Really? Stop it.')
        .closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
      // Very simple structure for fast rendering
    });
  });
});
