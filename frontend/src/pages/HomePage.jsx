// src/pages/HomePage.jsx
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '1rem',
        margin: '0 auto',
      }}
    >
      {/* Main Title Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: '2rem',
            marginBottom: '0.5rem',
            color: 'text.primary',
          }}
        >
          Welcome to John Webb dot com
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            fontSize: '1.25rem',
            color: 'text.secondary',
          }}
        >
          A space for my projects, thoughts, and more!
        </Typography>
      </Box>

      {/* Grid for content boxes */}
      <Grid container spacing={2}>
        {/* Box 1 */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Paper
            sx={{
              backgroundColor: 'background.paper',
              padding: '1.0rem',
              borderRadius: 'spacing',
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
                color: 'text.primary',
                // Fixing overflow issue
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
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
        <Grid size={{ xs: 12, sm: 6 }}>
          <Paper
            sx={{
              backgroundColor: 'background.paper',
              padding: '1.0rem',
              borderRadius: 'spacing',
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
                color: 'text.primary',
                // Fixes overflow issue
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              Technical Insights
            </Typography>
            <Typography
                sx={{
                    color: 'text.primary',
                }}
            >
              Read my latest articles on software architecture, DevOps, and more.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;