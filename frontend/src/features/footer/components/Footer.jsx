// src/components/Footer.jsx
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.paper' }}>
      <Container>
        <Typography variant="body2" color="text.secondary" align="right">
          {'© '}
          {new Date().getFullYear()}
          {' John Webb. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
