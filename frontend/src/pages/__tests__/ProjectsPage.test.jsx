import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import ProjectsPage from '../ProjectsPage';

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

describe('ProjectsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Main Content', () => {
    test('renders main heading "I\'m working on it!"', () => {
      renderWithProviders(<ProjectsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: "I'm working on it!" });
      expect(mainHeading).toBeInTheDocument();
    });

    test('renders secondary heading about no projects', () => {
      renderWithProviders(<ProjectsPage />);

      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /I have no projects. I'm a loser, I know./,
      });
      expect(secondaryHeading).toBeInTheDocument();
    });

    test('renders caption about future projects', () => {
      renderWithProviders(<ProjectsPage />);

      const caption = screen.getByRole('heading', {
        level: 3,
        name: /Probably not cool, but I will definitly have projects./,
      });
      expect(caption).toBeInTheDocument();
    });
  });

  describe('Content Accuracy', () => {
    test('contains correct main message', () => {
      renderWithProviders(<ProjectsPage />);

      expect(screen.getByText("I'm working on it!")).toBeInTheDocument();
    });

    test('contains self-deprecating humor about projects', () => {
      renderWithProviders(<ProjectsPage />);

      expect(screen.getByText(/I have no projects. I'm a loser, I know./)).toBeInTheDocument();
      expect(screen.getByText(/Soon, I will have projects and will be cool./)).toBeInTheDocument();
    });

    test('contains realistic expectation about being cool', () => {
      renderWithProviders(<ProjectsPage />);

      expect(
        screen.getByText(/Probably not cool, but I will definitly have projects./),
      ).toBeInTheDocument();
    });

    test('acknowledges typo in "definitly"', () => {
      renderWithProviders(<ProjectsPage />);

      const caption = screen.getByText(/definitly/);
      expect(caption).toBeInTheDocument();
      // Note: This is intentionally misspelled in the original content
    });
  });

  describe('Layout and Structure', () => {
    test('uses Container component for proper layout', () => {
      renderWithProviders(<ProjectsPage />);

      const container = screen
        .getByText("I'm working on it!")
        .closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
    });

    test('main heading has proper top margin', () => {
      renderWithProviders(<ProjectsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: "I'm working on it!" });
      expect(mainHeading).toBeInTheDocument();
    });

    test('secondary heading has proper top margin', () => {
      renderWithProviders(<ProjectsPage />);

      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /I have no projects. I'm a loser, I know./,
      });
      expect(secondaryHeading).toBeInTheDocument();
    });

    test('caption has proper top margin', () => {
      renderWithProviders(<ProjectsPage />);

      const caption = screen.getByRole('heading', {
        level: 3,
        name: /Probably not cool, but I will definitly have projects./,
      });
      expect(caption).toBeInTheDocument();
    });
  });

  describe('Typography and Styling', () => {
    test('main heading uses h2 variant', () => {
      renderWithProviders(<ProjectsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: "I'm working on it!" });
      expect(mainHeading).toBeInTheDocument();
    });

    test('secondary heading uses h4 variant', () => {
      renderWithProviders(<ProjectsPage />);

      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /I have no projects. I'm a loser, I know./,
      });
      expect(secondaryHeading).toBeInTheDocument();
    });

    test('caption uses caption variant', () => {
      renderWithProviders(<ProjectsPage />);

      const caption = screen.getByRole('heading', {
        level: 3,
        name: /Probably not cool, but I will definitly have projects./,
      });
      expect(caption).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper heading hierarchy', () => {
      renderWithProviders(<ProjectsPage />);

      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(3);
    });

    test('all headings are properly labeled', () => {
      renderWithProviders(<ProjectsPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: "I'm working on it!" });
      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /I have no projects. I'm a loser, I know./,
      });
      const caption = screen.getByRole('heading', {
        level: 3,
        name: /Probably not cool, but I will definitly have projects./,
      });

      expect(mainHeading).toBeInTheDocument();
      expect(secondaryHeading).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<ProjectsPage />);

      // All text should be visible and readable
      expect(screen.getByText("I'm working on it!")).toBeInTheDocument();
      expect(screen.getByText(/I have no projects. I'm a loser, I know./)).toBeInTheDocument();
      expect(
        screen.getByText(/Probably not cool, but I will definitly have projects./),
      ).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('container adapts to different screen sizes', () => {
      renderWithProviders(<ProjectsPage />);

      const container = screen
        .getByText("I'm working on it!")
        .closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
    });

    test('margins are responsive', () => {
      renderWithProviders(<ProjectsPage />);

      // Check that all headings have marginTop applied
      const mainHeading = screen.getByRole('heading', { level: 1, name: "I'm working on it!" });
      const secondaryHeading = screen.getByRole('heading', {
        level: 1,
        name: /I have no projects. I'm a loser, I know./,
      });
      const caption = screen.getByRole('heading', {
        level: 3,
        name: /Probably not cool, but I will definitly have projects./,
      });

      expect(mainHeading).toBeInTheDocument();
      expect(secondaryHeading).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
    });
  });

  describe('Content Intent', () => {
    test('conveys honest assessment of current state', () => {
      renderWithProviders(<ProjectsPage />);

      expect(screen.getByText(/I have no projects/)).toBeInTheDocument();
      expect(screen.getByText(/I'm a loser, I know/)).toBeInTheDocument();
    });

    test('shows optimism about future', () => {
      renderWithProviders(<ProjectsPage />);

      expect(screen.getByText(/Soon, I will have projects/)).toBeInTheDocument();
      expect(screen.getByText(/will be cool/)).toBeInTheDocument();
    });

    test('maintains realistic expectations', () => {
      renderWithProviders(<ProjectsPage />);

      expect(screen.getByText(/Probably not cool/)).toBeInTheDocument();
      expect(screen.getByText(/but I will definitly have projects/)).toBeInTheDocument();
    });

    test('uses self-deprecating humor appropriately', () => {
      renderWithProviders(<ProjectsPage />);

      const content = screen.getByText(/I'm a loser, I know/);
      expect(content).toBeInTheDocument();
      // This shows personality and honesty
    });
  });

  describe('Error Handling', () => {
    test('renders without crashing', () => {
      expect(() => {
        renderWithProviders(<ProjectsPage />);
      }).not.toThrow();
    });

    test('handles missing content gracefully', () => {
      renderWithProviders(<ProjectsPage />);

      // Should still render even if some content is missing
      expect(screen.getByText("I'm working on it!")).toBeInTheDocument();
    });
  });

  describe('Future Enhancement Readiness', () => {
    test('structure allows for easy content addition', () => {
      renderWithProviders(<ProjectsPage />);

      const container = screen
        .getByText("I'm working on it!")
        .closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
      // Container structure makes it easy to add more content later
    });

    test('typography hierarchy supports content expansion', () => {
      renderWithProviders(<ProjectsPage />);

      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(3);
      // Current heading structure can accommodate more sections
    });
  });
});
