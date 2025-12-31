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
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        paddingTop: 1,
        minWidth: '200px',
        flex: 1,
        backgroundColor: 'rgba(255, 192, 203, 0.15)',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'rgba(255, 105, 180, 0.3)',
      }}
    >
      {/* Reset Button - Top Right Corner */}
      <Button
        onClick={onReset}
        variant="text"
        size="small"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          minWidth: 'auto',
          color: 'text.secondary',
          fontSize: '0.75rem',
          padding: '4px 8px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          },
        }}
      >
        Reset
      </Button>

      {/* Counter Label - Top Center */}
      <Typography
        variant="h6"
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          fontSize: '1rem',
          marginBottom: 0.5,
          marginTop: 1,
          textAlign: 'center',
        }}
      >
        {label}
      </Typography>

      {/* Counter Value Display - Large and Centered */}
      <Typography
        variant="h1"
        sx={{
          fontSize: '5rem',
          fontWeight: 700,
          color: 'text.primary',
          marginBottom: 1,
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>

      {/* Increment/Decrement Buttons - Extra Large */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {/* Decrement Button - Extra Large */}
        <IconButton
          onClick={onDecrement}
          disabled={value === 0}
          color="primary"
          sx={{
            width: 100,
            height: 100,
            border: '3px solid',
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
          <RemoveIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>

        {/* Increment Button - Extra Large */}
        <IconButton
          onClick={onIncrement}
          color="primary"
          sx={{
            width: 100,
            height: 100,
            border: '3px solid',
            borderColor: 'primary.main',
            backgroundColor: 'background.default',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          <AddIcon sx={{ fontSize: '2.5rem' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Counter;
