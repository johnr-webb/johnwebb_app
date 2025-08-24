// src/components/Navigation.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { routes } from '../../../router';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Link component to be used for navigation items
const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

// A styled Box to create the hamburger lines
const HamburgerLines = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '24px',
  height: '18px',
  '& span': {
    display: 'block',
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
  },
}));

export const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!routes || routes.length === 0) {
    console.log('Routes not loaded yet');
    return null;
  }

  const navigationRoutes = routes.filter((route) => route.inNav);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: theme.spacing(1),
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <StyledLink to="/">
          <img src="/favicon.png" alt="Home" style={{ height: 44, width: 44 }} />
        </StyledLink>

        {isMobile ? (
          <Box>
            <IconButton
              aria-label="Toggle menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              <HamburgerLines>
                <span />
                <span />
                <span />
              </HamburgerLines>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={open}
              onClose={handleClose}
            >
              {navigationRoutes.map((route) => (
                <MenuItem key={route.path} onClick={handleClose}>
                  <StyledLink to={route.path}>{route.label}</StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navigationRoutes.map((route) => (
              <StyledLink key={route.path} to={route.path}>
                {route.label}
              </StyledLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
