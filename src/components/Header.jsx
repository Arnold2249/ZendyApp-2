import React from 'react';
import { Box, Paper, Typography, Button, Stack, Avatar } from '@mui/material';
import { FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa';

const Header = ({ weather, userName, handleLogout }) => (
  <Paper
    elevation={6}
    sx={{
      borderRadius: 4,
      p: { xs: 2, md: 4, sm:3 },
      mb: 4,
      width: '100%',
      background: 'linear-gradient(90deg,rgb(236, 239, 243) 0%,rgb(212, 219, 243) 100%)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
      overflow: 'hidden',
    }}
  >
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'center', md: 'center' }}
      justifyContent="space-between"
      spacing={4}
    >
      {/* Branding and Welcome */}
      <Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 50,
              height: 50,
              boxShadow: 15,
            }}
          >
            <FaBookOpen size={38} />
          </Avatar>
          <Typography
            variant="h4"
            fontWeight={600}
            color="primary.main"
            sx={{ letterSpacing: 1.5, fontFamily: 'Roboto, sans-serif' }}
          >
            Zendy
          </Typography>
        </Stack>
        <Typography variant="subtitle1" color="text.secondary" mb={3}>
          Your daily study companion
        </Typography>
        {userName && (
          <Stack direction="row" alignItems="center" spacing={2} mt={1}>
            <Typography variant="overline" color="primary.dark" >
              Welcome, <b>{userName}</b>
            </Typography>
            <Button
              variant="outlined"
              color="error"
              size="small"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                px: 2,
                py: 0.5,
                boxShadow: 'none',
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Stack>
        )}
      </Box>

      {/* Weather */}
      <Stack
        direction="row"
        spacing={7}
        sx={{
          bgcolor: 'white',
          borderRadius: 3,
          px: 3,
          py: 2,
          boxShadow: 5,
          minWidth: 220,
        }}
      >
        <Box display="flex" alignItems="center">
          <FaMapMarkerAlt style={{ marginRight: 10, color: 'grey', height: 20 }} />
          <Typography variant="subtitle1" fontWeight={600} color="primary.main">
            {weather.city}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h4" sx={{ mr: 1 }}>
            {weather.icon}
          </Typography>
          <Box>
            <Typography variant="h6" fontWeight={700} color="primary.main">
              {weather.temperature}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
              {weather.description}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  </Paper>
);

export default Header;