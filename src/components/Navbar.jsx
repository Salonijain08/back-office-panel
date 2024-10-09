
// import React from 'react';
// import { AppBar, Toolbar, Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navbar = ({ onLogout }) => {
//   return (
//     <AppBar
//       position="static"
//       sx={{
//         background: 'linear-gradient(135deg, #1c1c1c, #333333)', // Classy dark gradient background
//         backdropFilter: 'blur(10px)', // Blur for glass effect
//         border: '1px solid rgba(255, 255, 255, 0.2)', // Softer border for a clean glass effect
//         boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.6)', // Light shadow for depth
//       }}
//     >
//       <Toolbar>
//         <Typography
//           variant="h6"
//           sx={{
//             flexGrow: 1,
//             fontWeight: 'bold',
//             fontFamily: 'Poppins',
//             letterSpacing: '1.5px',
//             color: '#b8a078', // Elegant gold text color for the title
//             textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Slight shadow for depth
//             textTransform: 'uppercase',
//           }}
//         >
//           BACK OFFICE PANEL
//         </Typography>
//         <Button
//           color="inherit"
//           component={Link}
//           to="/users"
//           sx={{
//             margin: '0 10px',
//             fontWeight: 'bold',
//             color: '#ffffff', // White text for buttons
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.2)', // Soft hover effect
//               color: '#d1bfa3', // Change text to gold on hover
//               transform: 'scale(1.05)',
//               transition: 'all 0.3s ease',
//             },
//           }}
//         >
//           USERS
//         </Button>
//         <Button
//           color="inherit"
//           component={Link}
//           to="/task-lists"
//           sx={{
//             margin: '0 10px',
//             fontWeight: 'bold',
//             color: '#ffffff', // White text for buttons
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.2)', // Soft hover effect
//               color: '#d1bfa3', // Change text to gold on hover
//               transform: 'scale(1.05)',
//               transition: 'all 0.3s ease',
//             },
//           }}
//         >
//           TASK LIST
//         </Button>
//         <Button
//           color="inherit"
//           component={Link}
//           to="/tasks"
//           sx={{
//             margin: '0 10px',
//             fontWeight: 'bold',
//             color: '#ffffff', // White text for buttons
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.2)', // Soft hover effect
//               color: '#d1bfa3', // Change text to gold on hover
//               transform: 'scale(1.05)',
//               transition: 'all 0.3s ease',
//             },
//           }}
//         >
//           TASKS
//         </Button>
//         <Button
//           color="inherit"
//           onClick={onLogout}
//           sx={{
//             margin: '0 10px',
//             fontWeight: 'bold',
//             backgroundColor: '#b8a078', // Classy gold button
//             color: '#1c1c1c', // Darker button text for contrast
//             borderRadius: '20px',
//             '&:hover': {
//               backgroundColor: '#d1bfa3', // Lighter gold on hover
//               transform: 'scale(1.05)',
//               transition: 'all 0.3s ease',
//             },
//           }}
//         >
//           LOGOUT
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(135deg, #1c1c1c, #333333)', // Classy dark gradient
        backdropFilter: 'blur(10px)', // Blur for glass effect
        border: '1px solid rgba(255, 255, 255, 0.3)', // Border for visibility
        boxShadow: 'none', // Remove default shadow
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '2px',
            color: '#d1bfa3', // Classy gold text color
            textShadow: '2px 3px 5px rgba(0, 0, 0, 0.7)', // Stronger shadow for depth
            textTransform: 'uppercase',
          }}
        >
          BACK-OFFICE-PANEL
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/users"
          sx={{
            margin: '0 15px',
            fontWeight: 'bold',
            color: '#d1bfa3', // Gold text color
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light hover effect
              color: '#ffffff',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          USERS
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/task-lists"
          sx={{
            margin: '0 15px',
            fontWeight: 'bold',
            color: '#d1bfa3', // Gold text color
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light hover effect
              color: '#ffffff',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          TASK LIST
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/tasks"
          sx={{
            margin: '0 15px',
            fontWeight: 'bold',
            color: '#d1bfa3', // Gold text color
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light hover effect
              color: '#ffffff',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          TASKS
        </Button>
        <Button
          color="inherit"
          onClick={onLogout}
          sx={{
            margin: '0 15px',
            fontWeight: 'bold',
            backgroundColor: '#b8a078', // Classy gold button
            color: '#1c1c1c', // Dark text for contrast
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#d1bfa3', // Lighter gold on hover
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          LOGOUT
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
