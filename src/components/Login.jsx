
// import React, { useState } from "react";
// import { Button, TextField, Box, Typography } from "@mui/material";
// import "@fontsource/poppins";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password);
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #1c1c1c, #333333)", // Dark gradient for a classy background
//         fontFamily: "Poppins, sans-serif",
//         padding: "20px",
//       }}
//     >
//       <Typography
//         variant="h2"
//         sx={{
//           background: "linear-gradient(90deg, #b8a078, #d1bfa3)", // Gold and silver gradient for a luxurious look
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           fontWeight: "700",
//           fontSize: "3.5rem",
//           textAlign: "center",
//           letterSpacing: "3px",
//           textShadow: "3px 4px 6px rgba(0, 0, 0, 0.6)", // Subtle shadow for depth
//           textTransform: "uppercase",
//         }}
//       >
//         BACK-OFFICE-PANEL
//       </Typography>
//       <Box
//         sx={{
//           width: "400px",
//           padding: "40px",
//           borderRadius: "20px",
//           backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark, classy frosted glass effect
//           backdropFilter: "blur(10px)",
//           boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.7)", // Deep shadow for depth
//           transition: "all 0.3s ease-in-out",
//           "&:hover": {
//             transform: "scale(1.03)",
//             boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.9)", // Stronger shadow on hover
//           },
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           textAlign={"center"}
//           sx={{
//             color: "#d1bfa3", // Classy goldish-silver color for the title
//             letterSpacing: "1.5px",
//             fontWeight: "500",
//           }}
//         >
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Username"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             InputProps={{
//               style: {
//                 color: "#d1bfa3", // Subtle gold input text color
//               },
//             }}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "#d1bfa3", // Gold border for inputs
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#b8a078", // Slightly deeper gold on hover
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#d1bfa3", // Gold label color
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#b8a078", // Gold label when focused
//               },
//             }}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             InputProps={{
//               style: {
//                 color: "#d1bfa3", // Subtle gold input text color
//               },
//             }}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: "#d1bfa3", // Gold border for inputs
//                 },
//                 "&:hover fieldset": {
//                   borderColor: "#b8a078", // Slightly deeper gold on hover
//                 },
//               },
//               "& .MuiInputLabel-root": {
//                 color: "#d1bfa3", // Gold label color
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#b8a078", // Gold label when focused
//               },
//             }}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{
//               marginTop: "20px",
//               backgroundColor: "#b8a078", // Classy gold button
//               color: "#1c1c1c", // Dark text on button for contrast
//               fontWeight: "bold",
//               borderRadius: "10px", // Rounded button for a refined look
//               "&:hover": {
//                 backgroundColor: "#d1bfa3", // Slightly lighter gold on hover
//                 transform: "scale(1.05)",
//                 transition: "all 0.3s ease",
//               },
//             }}
//           >
//             Login
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import "@fontsource/poppins";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1c1c1c, #333333)", // Classy dark background gradient
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          background: "linear-gradient(90deg, #b8a078, #d1bfa3)", // Luxurious gold gradient
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
          fontSize: "3.5rem",
          letterSpacing: "3px",
          textAlign: "center",
          textShadow: "3px 4px 6px rgba(0, 0, 0, 0.6)", // Subtle shadow
          textTransform: "uppercase",
        }}
      >
        BACK-OFFICE-PANEL
      </Typography>
      <Box
        sx={{
          width: "400px",
          padding: "40px",
          borderRadius: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.75)", // Dark frosted glass look
          backdropFilter: "blur(10px)",
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.7)", // Deep shadow
          "&:hover": {
            transform: "scale(1.03)", // Slight zoom on hover
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.9)", // Stronger shadow
          },
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ color: "#d1bfa3", letterSpacing: "1.5px", fontWeight: "500" }}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: { color: "#d1bfa3" }, // Classy gold input text
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#d1bfa3", // Gold input border
                },
                "&:hover fieldset": {
                  borderColor: "#b8a078", // Darker gold on hover
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d1bfa3", // Gold label
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#b8a078", // Gold label when focused
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { color: "#d1bfa3" }, // Classy gold input text
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#d1bfa3", // Gold input border
                },
                "&:hover fieldset": {
                  borderColor: "#b8a078", // Darker gold on hover
                },
              },
              "& .MuiInputLabel-root": {
                color: "#d1bfa3", // Gold label
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#b8a078", // Gold label when focused
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: "20px",
              backgroundColor: "#b8a078", // Gold button
              color: "#1c1c1c", // Dark button text for contrast
              fontWeight: "bold",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#d1bfa3", // Lighter gold on hover
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
