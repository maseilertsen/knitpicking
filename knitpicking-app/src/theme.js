import { createTheme } from '@mui/material/styles';

/**
 * Custom Material-UI Theme
 *
 * This defines the visual style for the entire app:
 * - Dark mode by default
 * - Pink accent colors
 * - Rounded corners
 * - Custom spacing and typography
 */

const theme = createTheme({
  // Color palette
  palette: {
    mode: 'dark',  // Enable dark mode

    primary: {
      main: '#ff69b4',      // Hot pink - used for primary actions
      light: '#ff99cc',     // Light pink - hover states
      dark: '#cc5490',      // Dark pink - active states
      contrastText: '#fff', // White text on pink buttons
    },

    secondary: {
      main: '#ffc0cb',      // Light pink - secondary elements
      light: '#ffd6dd',     // Very light pink
      dark: '#cc99a3',      // Muted pink
      contrastText: '#000', // Black text on light pink
    },

    background: {
      default: '#0a0a0a',   // Almost black - page background
      paper: '#1a1a1a',     // Dark gray - card/project backgrounds
    },

    text: {
      primary: '#ffffff',   // White - main text
      secondary: '#aaaaaa', // Light gray - secondary text
    },

    error: {
      main: '#ff5252',      // Red for errors/delete
    },
  },

  // Typography (fonts and sizes)
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),

    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },

    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },

    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },

    // Large counter values
    display1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
  },

  // Shape (rounded corners)
  shape: {
    borderRadius: 12,  // All components get 12px rounded corners by default
  },

  // Component-specific overrides
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          // Slick border for project cards
          border: '2px solid',
          borderColor: '#ff69b4',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',  // Don't uppercase button text
          fontWeight: 600,
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255, 105, 180, 0.1)',  // Pink hover effect
          },
        },
      },
    },
  },

  // Spacing unit (used for margins, padding)
  // spacing(1) = 8px, spacing(2) = 16px, etc.
  spacing: 8,
});

export default theme;
