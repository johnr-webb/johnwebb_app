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
          Welcome to John Webb dot com
        </Typography>
        <Typography variant="h5" component="p" sx={{ maxWidth: '600px' }}>
          An evolving space for projects, thoughts, and more!
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ py: 8, px: 2, background: 'background.default' }}>
        <Container>
          <Grid container spacing={4} sx={{ mt: 0 }}>
            <Grid size={12}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: 'background.paper',
                  padding: 2,
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'left',
                }}
              >
                <Typography variant="h4" component="h2" gutterBottom>
                  Disclaimer!
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  There may frequently be broken links, half-finished projects, or incomplete
                  thoughts. It's a work in progress! Don't be so selfish, it's not meant to be a
                  finished product for you to consume. If you do find something specific, I
                  encourage you to file your grievances here:{' '}
                  <Link to="/complaints">complaints</Link>
                </Typography>
              </Paper>
            </Grid>
            {/* My Latest Experiments Box */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  Experiments & Projects
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Explore my portfolio of work, and documentation for recreating your own projects.
                </Typography>
                <Button variant="contained" component={Link} to="/projects">
                  View Projects
                </Button>
              </Paper>
            </Grid>

            {/* My Sandbox Box */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  My Thoughts
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  My thoughts on my technological journey, personal growth, and lessons learned.
                </Typography>
                <Button variant="contained" component={Link} to="/my-thoughts">
                  Read My Thoughts
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
