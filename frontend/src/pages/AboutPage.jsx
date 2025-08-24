import { Container, Typography, Box, Paper, Grid, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import myPhoto from '../assets/headshot.jpeg';

const AboutPage = () => {
  const aboutMeText1 = `
    Hello - thanks for coming to my website! I'm John Webb, a passionate engineer with a love for 
    finding simple solutions to complex problems. I currently work at Citi Bank on the Cloud Threat
    Informed Defense team, where I focus on the tools and processes that help prevent, detect, and
    remediate threats. With a background in computer science and Economics from the University of
    Michigan, I am finding my passion in examining team dynamics and, of course, DevSecOps.
  `;

  const aboutMeText2 = `
    Outside of daily work, I enjoy exploring new technologies and working on personal
    projects. This website is a space for me to do just that; I will be honing my skills by 
    consistently adding and refactoring everything that goes into this site and others.
  `;

  const aboutMeText3 = `
    Beyond technology, I live an active lifestyle. I love to travel, ski, run, and play tennis. I
    find all of these activities are better done with friends and family; I'm fortunate to have
    plenty of both.
  `;
  return (
    <Container
      sx={{
        padding: '2rem',
        margin: '0 auto',
      }}
    >
      <Box sx={{ textAlign: 'left', marginBottom: '2rem' }}>
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
            <Paper sx={{ padding: '1rem', textAlign: 'left' }}>
              <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: '1rem' }}>
                Reach out!
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                <Link href="mailto:johnwebb354@gmail.com">
                  <EmailIcon />
                  Email
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                <Link
                  href="https://github.com/johnr-webb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon /> GitHub
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link
                  href="https://www.linkedin.com/in/john-webb-643346170/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon /> LinkedIn
                </Link>
              </Typography>
            </Paper>
          </Stack>
        </Grid>

        {/* Right Column (Paragraphs) */}
        <Grid size={8}>
          <Paper sx={{ padding: '2rem' }}>
            <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
              {aboutMeText1}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
              {aboutMeText2}
            </Typography>
            <Typography variant="body1">{aboutMeText3}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
