import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Counter from './Counter';

/**
 * Project Component
 *
 * Wraps two counters in a styled container to represent a single project.
 * The light pink background visually groups the counters together.
 *
 * Props:
 * - project: object with shape:
 *     {
 *       id: string,
 *       name: string,
 *       color: string,
 *       counters: [
 *         { label: string, value: number },
 *         { label: string, value: number }
 *       ]
 *     }
 * - onUpdateCounter: function(counterIndex, newValue) - Called when counter changes
 * - onDelete: function() - Called when delete button is clicked
 */
function Project({ project, onUpdateCounter, onDelete }) {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 192, 203, 0.08)', // Light pink with transparency
        borderRadius: 2,
        border: '2px solid',
        borderColor: project.color || 'primary.main',
        padding: 3,
        marginBottom: 3,
      }}
    >
      {/* Project Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: 'text.primary',
            fontWeight: 600,
          }}
        >
          {project.name}
        </Typography>

        {/* Delete Button */}
        <IconButton
          onClick={onDelete}
          size="small"
          sx={{
            color: 'error.main',
            '&:hover': {
              backgroundColor: 'rgba(255, 82, 82, 0.1)',
            },
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>

      <Divider sx={{ marginBottom: 2, borderColor: 'rgba(255, 105, 180, 0.2)' }} />

      {/* Counters - Side by Side */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {/* First Counter */}
        <Counter
          label={project.counters[0].label}
          value={project.counters[0].value}
          onIncrement={() => onUpdateCounter(0, project.counters[0].value + 1)}
          onDecrement={() => onUpdateCounter(0, Math.max(0, project.counters[0].value - 1))}
          onReset={() => onUpdateCounter(0, 0)}
        />

        {/* Second Counter */}
        <Counter
          label={project.counters[1].label}
          value={project.counters[1].value}
          onIncrement={() => onUpdateCounter(1, project.counters[1].value + 1)}
          onDecrement={() => onUpdateCounter(1, Math.max(0, project.counters[1].value - 1))}
          onReset={() => onUpdateCounter(1, 0)}
        />
      </Box>
    </Box>
  );
}

export default Project;
