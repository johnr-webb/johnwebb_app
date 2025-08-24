import { Container, Typography, Box, Paper, Grid, Link, Stack } from '@mui/material';
import myPhoto from '../assets/headshot.jpeg';

const AboutPage = () => {
  return (
    <Container
      sx={{
        padding: '2rem',
        margin: '0 auto',
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Me
        </Typography>
      </Box>

      {/* Main Grid Container */}
      <Grid container spacing={4} alignItems="stretch">
        {/* Left Column (Headshot + Links) */}
        <Grid size={4}>
          <Stack spacing={2}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              src={myPhoto}
              alt="A photo of me"
              />
            <Paper sx={{ padding: '1rem', textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                  Connect with me
              </Typography>
              <Typography variant="body2">
                <Link href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                  GitHub
                  </Link>
              </Typography>
              <Typography variant="body2">
                <Link href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  </Link>
              </Typography>
            </Paper>
          </Stack>
        </Grid>

        {/* Right Column (Paragraphs) */}
        <Grid size={8}>
          <Paper sx={{ padding: '2rem', height: '100%' }}>
            <Typography variant="body1">
              I am a passionate software engineer with a focus on building intuitive and scalable web applications. My journey in technology began with a curiosity for how things work, and it has evolved into a career dedicated to creating meaningful digital experiences. I specialize in front-end development using React and Material UI, but I have a broad understanding of full-stack development.
            </Typography>
            <Typography variant="body1">
              Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and learning new things. This website is a space for me to share my projects, insights, and thoughts on the ever-evolving world of software.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
