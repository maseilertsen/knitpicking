import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

/**
 * AddProjectDialog Component
 *
 * Modal dialog for creating a new project.
 *
 * Props:
 * - open: boolean - Whether the dialog is visible
 * - onClose: function - Called when dialog should close
 * - onAdd: function(projectData) - Called when project is created
 */
function AddProjectDialog({ open, onClose, onAdd }) {
  // Form state
  const [projectName, setProjectName] = useState('');
  const [counter1Label, setCounter1Label] = useState('Rounds');
  const [counter2Label, setCounter2Label] = useState('Needle');
  const [selectedColor, setSelectedColor] = useState('#ff69b4');

  // Predefined pink color options
  const colorOptions = [
    { name: 'Hot Pink', value: '#ff69b4' },
    { name: 'Light Pink', value: '#ffb6c1' },
    { name: 'Deep Pink', value: '#ff1493' },
    { name: 'Pink', value: '#ffc0cb' },
    { name: 'Pale Pink', value: '#fadadd' },
    { name: 'Rose', value: '#ff66b2' },
  ];

  // Reset form when dialog closes
  const handleClose = () => {
    setProjectName('');
    setCounter1Label('Rounds');
    setCounter2Label('Needles');
    setSelectedColor('#ff69b4');
    onClose();
  };

  // Create project
  const handleAdd = () => {
    if (!projectName.trim()) {
      return; // Don't create if name is empty
    }

    const newProject = {
      id: Date.now().toString(), // Simple unique ID
      name: projectName.trim(),
      color: selectedColor,
      counters: [
        { label: counter1Label || 'Counter 1', value: 0 },
        { label: counter2Label || 'Counter 2', value: 0 },
      ],
    };

    onAdd(newProject);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: 'primary.main', fontWeight: 600 }}>
        Create New Project
      </DialogTitle>

      <DialogContent>
        {/* Project Name Input */}
        <TextField
          autoFocus
          margin="dense"
          label="Project Name"
          fullWidth
          variant="outlined"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="e.g., Winter Scarf"
          sx={{ marginBottom: 3 }}
        />

        {/* Counter Labels */}
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
          Counter Labels
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
          <TextField
            label="First Counter"
            fullWidth
            variant="outlined"
            value={counter1Label}
            onChange={(e) => setCounter1Label(e.target.value)}
            placeholder="Rounds"
          />
          <TextField
            label="Second Counter"
            fullWidth
            variant="outlined"
            value={counter2Label}
            onChange={(e) => setCounter2Label(e.target.value)}
            placeholder="Needles"
          />
        </Box>

        {/* Color Selection */}
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
          Project Color
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {colorOptions.map((color) => (
            <Box
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              sx={{
                width: 50,
                height: 50,
                backgroundColor: color.value,
                borderRadius: 2,
                cursor: 'pointer',
                border: '3px solid',
                borderColor: selectedColor === color.value ? 'white' : 'transparent',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  borderColor: 'white',
                },
              }}
              title={color.name}
            />
          ))}
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: 3, paddingTop: 0 }}>
        <Button onClick={handleClose} sx={{ color: 'text.secondary' }}>
          Cancel
        </Button>
        <Button
          onClick={handleAdd}
          variant="contained"
          disabled={!projectName.trim()}
          sx={{
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Create Project
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddProjectDialog;
