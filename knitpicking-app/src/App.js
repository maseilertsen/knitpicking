import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProjectList from './components/ProjectList';
import AddProjectDialog from './components/AddProjectDialog';

/**
 * Main App Component
 *
 * Manages all projects and their state.
 * TODO: Add localStorage persistence
 */
function App() {
  // State for all projects
  const [projects, setProjects] = useState([]);

  // State for Add Project dialog
  const [dialogOpen, setDialogOpen] = useState(false);

  // Add a new project
  const handleAddProject = (newProject) => {
    setProjects(prev => [...prev, newProject]);
  };

  // Update a specific counter in a specific project
  const handleUpdateCounter = (projectId, counterIndex, newValue) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === projectId
          ? {
              ...project,
              counters: project.counters.map((counter, index) =>
                index === counterIndex ? { ...counter, value: newValue } : counter
              ),
            }
          : project
      )
    );
  };

  // Delete a project
  const handleDeleteProject = (projectId) => {
    setProjects(prev => prev.filter(project => project.id !== projectId));
  };

  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      {/* App Title */}
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          marginBottom: 1,
          color: 'primary.main',
          fontSize: { xs: '2rem', sm: '2.5rem' },
        }}
      >
        Knitpicking
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          marginBottom: 4,
        }}
      >
        Track your knitting and crochet projects
      </Typography>

      {/* Projects List */}
      <ProjectList
        projects={projects}
        onUpdateCounter={handleUpdateCounter}
        onDeleteProject={handleDeleteProject}
        onAddClick={() => setDialogOpen(true)}
      />

      {/* Add Project Dialog */}
      <AddProjectDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAdd={handleAddProject}
      />
    </Container>
  );
}

export default App;
