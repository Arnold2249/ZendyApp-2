import React from 'react';
import { Box, Paper, Typography, LinearProgress, Stack } from '@mui/material';
import { FaChartPie } from 'react-icons/fa';

const Stats = ({ completedTasks, totalTasks, completionPercentage }) => (
  <Paper
    elevation={3}
    sx={{
      borderRadius: 3,
      p: 4,
      mb: 3,
      bgcolor: 'white',
    }}
  >
    <Typography
      variant="h6"
      fontWeight={600}
      color="text.primary"
      sx={{ mb: 2, display: 'flex', alignItems: 'center' }}
    >
      <FaChartPie style={{ color: '#6366f1', marginRight: 8 }} />
      Today's Progress
    </Typography>
    <Stack spacing={2}>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
          <Typography variant="body2" color="text.secondary">
            Tasks Completed
          </Typography>
          <Typography variant="body2" color="text.secondary" id="completed-count">
            {completedTasks} / {totalTasks}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={completionPercentage}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: '#e5e7eb',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#22c55e',
              borderRadius: 5,
            },
          }}
        />
      </Box>
    </Stack>
  </Paper>
);

export default Stats;