// src/pages/BlogPage.jsx
import { Typography, Container } from '@mui/material';

const MyThoughtsPage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" marginTop="10vh">
        My Thoughts
      </Typography>
      <Typography variant="h4" component="h1" marginTop="10vh">
        Currently no thoughts... sad. Check back later. Maybe?
      </Typography>
    </Container>
  );
};

export default MyThoughtsPage;
