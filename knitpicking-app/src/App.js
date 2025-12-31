import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Project from './components/Project';

/**
 * Main App Component
 *
 * This is a demo to showcase the Project component.
 * Eventually this will manage multiple projects with localStorage.
 */
function App() {
  // Demo project data
  const [project, setProject] = useState({
    id: '1',
    name: 'Winter Scarf',
    color: '#ff69b4',
    counters: [
      { label: 'Rounds', value: 0 },
      { label: 'Needles', value: 0 }
    ]
  });

  // Update a specific counter
  const handleUpdateCounter = (counterIndex, newValue) => {
    setProject(prev => ({
      ...prev,
      counters: prev.counters.map((counter, index) =>
        index === counterIndex ? { ...counter, value: newValue } : counter
      )
    }));
  };

  // Delete handler (for demo, just logs)
  const handleDelete = () => {
    console.log('Delete clicked for:', project.name);
  };

  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      {/* App Title */}
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          color: 'primary.main',
          fontSize: { xs: '2rem', sm: '2.5rem' },
        }}
      >
        Knitpicking
      </Typography>

      {/* Demo Description */}
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          marginBottom: 4,
        }}
      >
        A counter app for knitting/crochet
      </Typography>

      {/* Project Component */}
      <Project
        project={project}
        onUpdateCounter={handleUpdateCounter}
        onDelete={handleDelete}
      />
    </Container>
  );
}

export default App;
