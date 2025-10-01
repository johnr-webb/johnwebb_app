# John Webb - Personal Portfolio & Development Space Frontend

A React app using Vite to act as a portfolio, sandbox environment, and personal journey documentation.

Built with MUI and modern React patterns.

If you see anything you like, dislike, have questions about, reach out via email **johnwebb354@gmail.com**.
I'm always excited to receive harsh feedback, or collaborate with strangers.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Material-UI components
- **Modern React** - Built with React 19+ and latest hooks patterns
- **Performance Optimized** - Memoized components and efficient rendering
- **Error Boundaries** - Graceful error handling throughout the application
- **Environment Configuration** - Centralized configuration management
- **Comprehensive Testing** - Full test coverage for all page components

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.1.0** - Latest React with concurrent features
- **Vite 6.3.5** - Fast build tool and development server
- **React Router 7.6.1** - Modern routing with data APIs

### UI & Styling

- **Material-UI 7.1.0** - Latest Material Design components
- **Emotion** - CSS-in-JS styling solution
- **Responsive Grid** - Modern Grid system with `size` prop

### Development Tools

- **ESLint 9.25.0** - Code quality and consistency
- **Vitest 2.1.8** - Fast unit testing framework
- **Testing Library** - React component testing utilities

### API & Data

- **Axios** - HTTP client with interceptors
- **Environment Config** - Centralized API configuration

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ErrorBoundary.jsx
│   └── LoadingSkeleton.jsx
├── config/              # Application configuration
│   └── environment.js
├── features/            # Feature-based organization
│   ├── auth/           # Authentication (future)
│   ├── footer/         # Footer component
│   ├── navigation/     # Navigation component
│   ├── posts/          # Posts management
│   └── users/          # User management
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── AboutPage.jsx   # About me
│   ├── ProjectsPage.jsx # Projects showcase
│   ├── ThoughtsPage.jsx # Personal thoughts
│   └── ComplaintsPage.jsx # Humorous complaints page
├── router/             # Routing configuration
│   └── index.jsx
├── services/           # API and external services
│   └── apiClient.js
├── theme.js            # Material-UI theme configuration
└── setupTests.js       # Vitest testing setup
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file
   cp .env.example .env

   # Configure your environment
   VITE_API_BASE_URL=http://localhost:8000
   VITE_NODE_ENV=development
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run tests for CI/CD
npm run test:ci
```

### Test Coverage

- **HomePage** - Hero section, disclaimer, projects, thoughts
- **AboutPage** - Profile, contact links, about text
- **ProjectsPage** - Content, layout, responsive design
- **ThoughtsPage** - Content, accessibility, future readiness
- **ComplaintsPage** - Humor, performance, user experience

### Testing Strategy

- **Component Testing** - Individual page components
- **Accessibility Testing** - ARIA labels, heading hierarchy
- **Responsive Testing** - Mobile and desktop layouts
- **Error Handling** - Graceful fallbacks and error boundaries

## 🏗️ Build & Deployment

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🌐 Environment Configuration

### Available Variables

```bash
VITE_API_BASE_URL=http://localhost:8000  # API endpoint
VITE_NODE_ENV=development                # Environment
VITE_ENABLE_ANALYTICS=false              # Analytics toggle
VITE_ENABLE_DEBUG_MODE=false             # Debug mode toggle
```

### Configuration Management

- Centralized in `src/config/environment.js`
- Environment-specific overrides
- Fallback values for development

## 📱 Responsive Design

### Breakpoints

- **xs** (0px+) - Mobile devices
- **sm** (600px+) - Small tablets
- **md** (900px+) - Tablets and small laptops
- **lg** (1200px+) - Desktop computers
- **xl** (1536px+) - Large displays

### Grid System

```jsx
// Modern Material-UI v7+ syntax
<Grid container spacing={4}>
  <Grid size={{ xs: 12, md: 6 }}>{/* Full width on mobile, half on desktop */}</Grid>
</Grid>
```

## 🔧 Development Workflow

### Code Quality

- **ESLint** - Consistent code style
- **Prettier** - Code formatting (recommended)
- **TypeScript** - Future enhancement for type safety

### Git Workflow

1. Create feature branch
2. Make changes with tests
3. Run linting and tests
4. Submit pull request
5. Code review and merge

### Performance Considerations

- **React.memo** for expensive components
- **useCallback** for function memoization
- **Lazy loading** for route-based code splitting
- **Image optimization** for faster loading

## 🚀 Future Enhancements

### Planned Features

- [ ] **Authentication System** - User login and registration
- [ ] **Blog System** - Markdown support for thoughts
- [ ] **Project Showcase** - Interactive project demos
- [ ] **Contact Form** - Direct communication
- [ ] **Analytics Dashboard** - Visitor insights
- [ ] **Dark Mode** - Theme switching
- [ ] **Internationalization** - Multi-language support

### Technical Improvements

- [ ] **TypeScript Migration** - Full type safety
- [ ] **PWA Support** - Offline capabilities
- [ ] **Performance Monitoring** - Real user metrics
- [ ] **Automated Testing** - CI/CD pipeline
- [ ] **Accessibility Audit** - WCAG compliance

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

### Code Standards

- Follow existing code style
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

**John Webb** - Cloud Security Engineer at Citi Bank

- **Focus**: Cloud Threat Informed Defense
- **Background**: Computer Science & Economics, University of Michigan
- **Interests**: Technology, skiing, running, tennis, travel
- **Philosophy**: Finding simple solutions to complex problems

## 📞 Contact

- **Email**: [johnwebb354@gmail.com](mailto:johnwebb354@gmail.com)
- **GitHub**: [@johnr-webb](https://github.com/johnr-webb)
- **LinkedIn**: [John Webb](https://www.linkedin.com/in/john-webb-643346170/)

---
