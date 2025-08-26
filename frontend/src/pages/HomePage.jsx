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
          height: '100vh',
          backgroundImage: `url(${mountainView})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'top',
          paddingTop: '10vh',
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
        <Typography variant="h5" component="p" sx={{ maxWidth: '600px' }}>
          Welcome to my digital lab, where I explore the frontiers of technology, share my personal
          projects, and document my journey.
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: 8, px: 2, background: 'background.default' }}>
        <Container maxWidth="md">
          <Grid container spacing={4} sx={{ mt: 0 }}>
            {/* My Latest Experiments Box */}
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
                  My Latest Experiments
                </Typography>
                <Typography variant="body1">
                  Explore my portfolio of work, from web applications to open-source contributions.
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
                  My Sandbox
                </Typography>
                <Typography variant="body1">
                  Read my thoughts on software architecture, running, and anything else on my mind.
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
