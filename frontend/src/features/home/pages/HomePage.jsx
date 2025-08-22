// src/pages/HomePage.jsx
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '2rem',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      {/* Main Title Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: '3rem',
            marginBottom: '0.5rem',
            color: 'var(--text-color)',
          }}
        >
          Welcome to my Site!
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            fontSize: '1.25rem',
            color: 'var(--text-color-light)',
          }}
        >
          A space for my projects, thoughts, and more.
        </Typography>
      </Box>

      {/* Grid for content boxes */}
      <Grid container spacing={2.5}>
        {/* Box 1 */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              backgroundColor: 'var(--background-color-alt)',
              padding: '1.5rem',
              borderRadius: 'var(--border-radius)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: '1.5rem',
                marginBottom: '0.75rem',
                color: 'var(--primary-color)',
              }}
            >
              My Latest Projects
            </Typography>
            <Typography sx={{ color: 'var(--text-color)' }}>
              Explore my portfolio of work, from web applications to open-source contributions.
            </Typography>
          </Paper>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              backgroundColor: 'var(--background-color-alt)',
              padding: '1.5rem',
              borderRadius: 'var(--border-radius)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: '1.5rem',
                marginBottom: '0.75rem',
                color: 'var(--primary-color)',
              }}
            >
              Technical Insights
            </Typography>
            <Typography sx={{ color: 'var(--text-color)' }}>
              Read my latest articles on software architecture, DevOps, and more.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;