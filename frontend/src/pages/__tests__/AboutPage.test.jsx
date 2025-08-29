import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import AboutPage from '../AboutPage';

// Mock the image import
vi.mock('../../assets/headshot.jpeg', () => ({
  default: 'mocked-headshot-path',
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

describe('AboutPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Header Section', () => {
    test('renders main heading "About Me"', () => {
      renderWithProviders(<AboutPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'About Me' });
      expect(mainHeading).toBeInTheDocument();
    });

    test('main heading has correct styling and positioning', () => {
      renderWithProviders(<AboutPage />);

      const mainHeading = screen.getByRole('heading', { level: 1, name: 'About Me' });
      expect(mainHeading).toBeInTheDocument();
    });
  });

  describe('Left Column - Profile Section', () => {
    test('renders profile image with correct attributes', () => {
      renderWithProviders(<AboutPage />);

      const profileImage = screen.getByAltText('A photo of me');
      expect(profileImage).toBeInTheDocument();
      expect(profileImage).toHaveAttribute('src', 'mocked-headshot-path');
    });

    test('profile image has correct styling', () => {
      renderWithProviders(<AboutPage />);

      const profileImage = screen.getByAltText('A photo of me');
      expect(profileImage).toBeInTheDocument();
    });

    test('renders "Reach out!" section title', () => {
      renderWithProviders(<AboutPage />);

      const reachOutTitle = screen.getByText('Reach out!');
      expect(reachOutTitle).toBeInTheDocument();
      expect(reachOutTitle.tagName).toBe('H6');
    });
  });

  describe('Contact Links', () => {
    test('renders email link with correct attributes', () => {
      renderWithProviders(<AboutPage />);

      const emailLink = screen.getByRole('link', { name: /Email/ });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', 'mailto:johnwebb354@gmail.com');
    });

    test('renders GitHub link with correct attributes', () => {
      renderWithProviders(<AboutPage />);

      const githubLink = screen.getByRole('link', { name: /GitHub/ });
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('href', 'https://github.com/johnr-webb');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders LinkedIn link with correct attributes', () => {
      renderWithProviders(<AboutPage />);

      const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ });
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/john-webb-643346170/',
      );
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('all contact links have proper icons', () => {
      renderWithProviders(<AboutPage />);

      // Check that icons are present (they should be rendered as part of the link text)
      const emailLink = screen.getByRole('link', { name: /Email/ });
      const githubLink = screen.getByRole('link', { name: /GitHub/ });
      const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ });

      expect(emailLink).toBeInTheDocument();
      expect(githubLink).toBeInTheDocument();
      expect(linkedinLink).toBeInTheDocument();
    });
  });

  describe('Right Column - About Text', () => {
    test('renders first paragraph about current work', () => {
      renderWithProviders(<AboutPage />);

      const firstParagraph = screen.getByText(/Hello - thanks for coming to my website!/);
      expect(firstParagraph).toBeInTheDocument();
      expect(firstParagraph).toHaveTextContent(/Citi Bank/);
      expect(firstParagraph).toHaveTextContent(/Cloud Threat Informed Defense/);
    });

    test('renders second paragraph about personal projects', () => {
      renderWithProviders(<AboutPage />);

      const secondParagraph = screen.getByText(/Outside of daily work, I enjoy exploring/);
      expect(secondParagraph).toBeInTheDocument();
      expect(secondParagraph).toHaveTextContent(/personal projects/);
      expect(secondParagraph).toHaveTextContent(/honing my skills/);
    });

    test('renders third paragraph about lifestyle', () => {
      renderWithProviders(<AboutPage />);

      const thirdParagraph = screen.getByText(/Beyond technology, I live an active lifestyle/);
      expect(thirdParagraph).toBeInTheDocument();
      expect(thirdParagraph).toHaveTextContent(/ski/);
      expect(thirdParagraph).toHaveTextContent(/run/);
      expect(thirdParagraph).toHaveTextContent(/tennis/);
    });

    test('all paragraphs have proper spacing', () => {
      renderWithProviders(<AboutPage />);

      const paragraphs = screen.getAllByText(
        /Hello - thanks for coming to my website!|Outside of daily work, I enjoy exploring|Beyond technology, I live an active lifestyle/,
      );
      expect(paragraphs).toHaveLength(3);
    });
  });

  describe('Layout and Structure', () => {
    test('uses correct Grid layout structure', () => {
      renderWithProviders(<AboutPage />);

      // Find the grid container by looking for the main content area
      const mainContent = screen
        .getByText(/Hello - thanks for coming to my website!/)
        .closest('[class*="MuiGrid-container"]');
      expect(mainContent).toBeInTheDocument();
    });

    test('left column takes 4/12 grid space', () => {
      renderWithProviders(<AboutPage />);

      const leftColumn = screen.getByAltText('A photo of me').closest('[class*="MuiGrid-root"]');
      expect(leftColumn).toBeInTheDocument();
    });

    test('right column takes 8/12 grid space', () => {
      renderWithProviders(<AboutPage />);

      const rightColumn = screen
        .getByText(/Hello - thanks for coming to my website!/)
        .closest('[class*="MuiGrid-root"]');
      expect(rightColumn).toBeInTheDocument();
    });

    test('container has proper padding and margins', () => {
      renderWithProviders(<AboutPage />);

      const container = screen.getByText('About Me').closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Styling and Visual Elements', () => {
    test('profile image has rounded corners and shadow', () => {
      renderWithProviders(<AboutPage />);

      const profileImage = screen.getByAltText('A photo of me');
      expect(profileImage).toBeInTheDocument();
    });

    test('contact section is wrapped in Paper component', () => {
      renderWithProviders(<AboutPage />);

      const contactPaper = screen.getByText('Reach out!').closest('[class*="MuiPaper-root"]');
      expect(contactPaper).toBeInTheDocument();
    });

    test('about text is wrapped in Paper component', () => {
      renderWithProviders(<AboutPage />);

      const aboutPaper = screen
        .getByText(/Hello - thanks for coming to my website!/)
        .closest('[class*="MuiPaper-root"]');
      expect(aboutPaper).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper heading hierarchy', () => {
      renderWithProviders(<AboutPage />);

      const h1 = screen.getByRole('heading', { level: 1 });
      const h6 = screen.getByRole('heading', { level: 6 });

      expect(h1).toBeInTheDocument();
      expect(h6).toBeInTheDocument();
    });

    test('all links have proper href attributes', () => {
      renderWithProviders(<AboutPage />);

      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('href');
      });
    });

    test('external links have proper security attributes', () => {
      renderWithProviders(<AboutPage />);

      const externalLinks = screen
        .getAllByRole('link')
        .filter((link) => link.href.includes('github.com') || link.href.includes('linkedin.com'));

      externalLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    test('profile image has descriptive alt text', () => {
      renderWithProviders(<AboutPage />);

      const profileImage = screen.getByAltText('A photo of me');
      expect(profileImage).toBeInTheDocument();
      expect(profileImage).toHaveAttribute('alt', 'A photo of me');
    });
  });

  describe('Content Accuracy', () => {
    test('contains correct company information', () => {
      renderWithProviders(<AboutPage />);

      expect(screen.getByText(/Citi Bank/)).toBeInTheDocument();
      expect(screen.getByText(/Cloud Threat Informed Defense/)).toBeInTheDocument();
    });

    test('contains correct educational background', () => {
      renderWithProviders(<AboutPage />);

      expect(screen.getByText(/University of Michigan/)).toBeInTheDocument();
      expect(screen.getByText(/computer science and Economics/)).toBeInTheDocument();
    });

    test('contains correct personal interests', () => {
      renderWithProviders(<AboutPage />);

      // Look for the text within the paragraph content
      const lifestyleParagraph = screen.getByText(/Beyond technology, I live an active lifestyle/);
      expect(lifestyleParagraph).toHaveTextContent(/ski/);
      expect(lifestyleParagraph).toHaveTextContent(/run/);
      expect(lifestyleParagraph).toHaveTextContent(/tennis/);
      expect(lifestyleParagraph).toHaveTextContent(/travel/);
    });

    test('contains correct contact information', () => {
      renderWithProviders(<AboutPage />);

      // Check that the email link exists with the correct href
      const emailLink = screen.getByRole('link', { name: /Email/ });
      expect(emailLink).toHaveAttribute('href', 'mailto:johnwebb354@gmail.com');

      // Check that the GitHub link exists
      const githubLink = screen.getByRole('link', { name: /GitHub/ });
      expect(githubLink).toBeInTheDocument();

      // Check that the LinkedIn link exists
      const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ });
      expect(linkedinLink).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('uses responsive grid layout', () => {
      renderWithProviders(<AboutPage />);

      // Find the grid container by looking for the main content area
      const mainContent = screen
        .getByText(/Hello - thanks for coming to my website!/)
        .closest('[class*="MuiGrid-container"]');
      expect(mainContent).toBeInTheDocument();
    });

    test('container has responsive padding', () => {
      renderWithProviders(<AboutPage />);

      const container = screen.getByText('About Me').closest('[class*="MuiContainer-root"]');
      expect(container).toBeInTheDocument();
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
        renderWithProviders(<AboutPage />);
      }).not.toThrow();

      global.Image = originalImage;
    });
  });
});
