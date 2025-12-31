import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

/**
 * Counter Component
 *
 * A reusable counter display with increment, decrement, and reset buttons.
 *
 * Props:
 * - label: string - The label to display above the counter (e.g., "Rounds")
 * - value: number - The current counter value
 * - onIncrement: function - Called when + button is clicked
 * - onDecrement: function - Called when - button is clicked
 * - onReset: function - Called when Reset button is clicked
 */
function Counter({ label, value, onIncrement, onDecrement, onReset }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        minWidth: '180px',
        flex: 1,
        backgroundColor: 'rgba(255, 192, 203, 0.15)', // Lighter pink background
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'rgba(255, 105, 180, 0.3)', // Semi-transparent pink border
      }}
    >
      {/* Label and Value - Horizontal Layout */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 1.5,
        }}
      >
        {/* Counter Label */}
        <Typography
          variant="h6"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          {label}
        </Typography>

        {/* Counter Value Display */}
        <Typography
          variant="h1"
          sx={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          {value}
        </Typography>
      </Box>

      {/* Increment/Decrement and Reset Buttons */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        {/* Decrement Button */}
        <IconButton
          onClick={onDecrement}
          disabled={value === 0}
          color="primary"
          size="small"
          sx={{
            border: '2px solid',
            borderColor: value === 0 ? 'grey.700' : 'primary.main',
            backgroundColor: value === 0 ? 'grey.900' : 'background.default',
            '&:hover': {
              backgroundColor: value === 0 ? 'grey.900' : 'primary.dark',
            },
            '&.Mui-disabled': {
              borderColor: 'grey.700',
              color: 'grey.700',
            },
          }}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>

        {/* Increment Button */}
        <IconButton
          onClick={onIncrement}
          color="primary"
          size="small"
          sx={{
            border: '2px solid',
            borderColor: 'primary.main',
            backgroundColor: 'background.default',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          <AddIcon fontSize="small" />
        </IconButton>

        {/* Reset Button */}
        <Button
          onClick={onReset}
          variant="outlined"
          size="small"
          sx={{
            marginLeft: 'auto',
            color: 'text.secondary',
            borderColor: 'grey.700',
            fontSize: '0.75rem',
            '&:hover': {
              borderColor: 'grey.500',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default Counter;
