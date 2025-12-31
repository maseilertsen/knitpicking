import { Box, Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Project from './Project';

/**
 * ProjectList Component
 *
 * Displays all projects and a floating "Add Project" button.
 *
 * Props:
 * - projects: array - List of project objects
 * - onUpdateCounter: function(projectId, counterIndex, newValue) - Update counter
 * - onDeleteProject: function(projectId) - Delete a project
 * - onAddClick: function - Called when Add button is clicked
 */
function ProjectList({ projects, onUpdateCounter, onDeleteProject, onAddClick }) {
  return (
    <Box sx={{ position: 'relative', paddingBottom: 10 }}>
      {/* Show message if no projects */}
      {projects.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            paddingY: 8,
            color: 'text.secondary',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            No projects yet
          </Typography>
          <Typography variant="body2">
            Click the + button to create your first project
          </Typography>
        </Box>
      )}

      {/* List of Projects */}
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          onUpdateCounter={(counterIndex, newValue) =>
            onUpdateCounter(project.id, counterIndex, newValue)
          }
          onDelete={() => onDeleteProject(project.id)}
        />
      ))}

      {/* Floating Add Button */}
      <Fab
        color="primary"
        aria-label="add project"
        onClick={onAddClick}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default ProjectList;
