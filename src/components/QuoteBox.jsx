import React from 'react';
import { Box, Paper, Typography, Button, Stack } from '@mui/material';
import { FaQuoteLeft, FaSyncAlt } from 'react-icons/fa';

const QuoteBox = ({ quote, fetchMotivationalQuote }) => (
  <Paper
    elevation={4}
    sx={{
      borderRadius: 3,
      p: 4,
      background: 'linear-gradient(90deg,rgb(125, 175, 241) 0%,rgb(163, 174, 211) 100%)',
      color: 'primary.contrastText',
      mb: 3,
      height: 'fit-content',
    }}
  >
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <FaQuoteLeft style={{ opacity: 0.5, fontSize: 18, marginTop: 4 }} />
      <Box flex={1}>
        <Typography id="quote-text" variant="h6" fontWeight={500 } sx={{ fontStyle: 'italic'  }}>
          {quote.text}
        </Typography>
        <Typography
          id="quote-author"
          variant="subtitle2"
          align="right"
          sx={{ opacity: 0.8, mt: 2 }}
        >
          - {quote.author}
        </Typography>
      </Box>
    </Stack>
    <Button
      id="new-quote-btn"
      variant="contained"
      color="secondary"
      sx={{
        mt: 3,
        bgcolor: 'white',
        color: 'primary.main',
        fontWeight: 500,
        textTransform: 'none',
        '&:hover': { bgcolor: '#f3f4f6' },
      }}
      startIcon={<FaSyncAlt />}
      onClick={fetchMotivationalQuote}
    >
      New Quote
    </Button>
  </Paper>
);

export default QuoteBox;