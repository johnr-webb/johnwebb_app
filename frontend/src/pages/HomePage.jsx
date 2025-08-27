// src/pages/HomePage.jsx
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import mountainView from '../assets/mountain-view-vail.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Hero Section: The Hero section will take over the whole screen */}
      <Box
        sx={{
          height: '75vh',
          backgroundImage: `url(${mountainView})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'top',
          paddingTop: '5vh',
          paddingLeft: '25vw',
          alignItems: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to my personal website
        </Typography>
        <Typography variant="h5" component="p" sx={{ maxWidth: '575px' }}>
          Welcome to a living workspace where I explore technology, share my projects, and document
          my personal journeys.
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: 8, px: 2, background: 'background.default' }}>
        <Container>
          <Grid container spacing={4} sx={{ mt: 0 }}>
            {/* My Latest Experiments Box */}
            <Grid size={6}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: 'background.paper',
                  padding: 4,
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" component="h2" gutterBottom>
                  Latest Experiments
                </Typography>
                <Typography variant="body1" marginBottom="1rem">
                  Explore my portfolio of work, and documentation for recreating your own projects.
                </Typography>
                <Button variant="contained" component={Link} to="/projects">
                  View Projects
                </Button>
              </Paper>
            </Grid>

            {/* My Sandbox Box */}
            <Grid size={6}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: 'background.paper',
                  p: 4,
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" component="h2" gutterBottom>
                  Blog Thoughts
                </Typography>
                <Typography variant="body1" marginBottom="1rem">
                  Read my thoughts on my technological journey, personal growth, and lessons
                  learned.
                </Typography>
                <Button variant="contained" component={Link} to="/blog">
                  Read My Blog
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
