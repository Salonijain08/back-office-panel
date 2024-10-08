// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box, Typography } from "@mui/material";

// const columns = [
//   { field: "email", headerName: "Email ID", width: 300 },
//   { field: "password", headerName: "Password", width: 350 },
//   { field: "signupTime", headerName: "Signup Time", width: 200 },
//   { field: "ip", headerName: "IP", width: 150 },
// ];

// const Users = () => {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://back-office-panel-w21y.onrender.com/users");
//         const data = await response.json();
//         setRows(data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "91.666667%",
//         margin: "30px auto",
//         padding: "20px",
//         backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent color for panel
//         borderRadius: "10px",
//         boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//         fontFamily: "Poppins",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           color: "#ffffff", // Text color changed to white for contrast
//           textAlign: "center",
//           marginBottom: "20px",
//           fontWeight: "bold",
//         }}
//       >
//         USERS LIST
//       </Typography>
//       <Box
//         sx={{
//           overflowX: "auto",
//           height: 400,
//           backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent color for DataGrid panel
//           borderRadius: "10px",
//           padding: "10px",
//           boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
//         }}
//       >
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           loading={loading}
//           sx={{
//             "& .MuiDataGrid-root": {
//               border: "none",
//               backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background for DataGrid
//             },
//             "& .MuiDataGrid-cell": {
//               color: "#ffffff", // Changed to white for contrast
//             },
//             "& .MuiDataGrid-columnHeaders": {
//   backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with transparency
//   color: "#121111", // White text for contrast
//   fontWeight: "900", // Extra bold text
//   height: "60px", // Increased height
//   fontSize: "1.1rem", // Slightly larger font size for better readability
// },


// "& .MuiDataGrid-footerContainer": {
//   backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent footer
//   "& .MuiTablePagination-root": {
//     color: "#ffffff", // White text color
//   },
//   "& .MuiSelect-root": {
//     color: "#ffffff", // White text for select dropdown
//   },
//   "& .MuiInputBase-root": {
//     color: "#ffffff", // White text for input fields
//   },
//   "& .MuiTablePagination-selectLabel": {
//     color: "#ffffff", // White text for label
//   },
//   "& .MuiTablePagination-displayedRows": {
//     color: "#ffffff", // White text for displayed rows
//   },
// },


//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Users;
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const columns = [
  { field: "email", headerName: "Email ID", width: 300 },
  { field: "password", headerName: "Password", width: 350 },
  { field: "signupTime", headerName: "Signup Time", width: 200 },
  { field: "ip", headerName: "IP", width: 150 },
];

const Users = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://back-office-panel-w21y.onrender.com/users");
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box
      sx={{
        width: "91.666667%",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "rgba(25, 25, 25, 0.8)", // Darker background for panel
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#d1bfa3", // Classy gold color for contrast
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)", // Strong shadow for depth
        }}
      >
        USERS LIST
      </Typography>
      <Box
        sx={{
          overflowX: "auto",
          height: 400,
          backgroundColor: "rgba(25, 25, 25, 0.8)", // Darker background for DataGrid panel
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          loading={loading}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              backgroundColor: "rgba(25, 25, 25, 0.8)", // Darker background for DataGrid
            },
            "& .MuiDataGrid-cell": {
              color: "#ffffff", // White text for contrast
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "rgba(0, 0, 0, 0.9)", // Darker column header
              color: "#d1bfa3", // Gold text for contrast
              fontWeight: "900", // Extra bold text
              height: "60px", // Increased height
              fontSize: "1.1rem", // Slightly larger font size for better readability
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "rgba(25, 25, 25, 0.8)", // Dark footer
              "& .MuiTablePagination-root": {
                color: "#d1bfa3", // Gold text for pagination
              },
              "& .MuiSelect-root": {
                color: "#ffffff", // White text for select dropdown
              },
              "& .MuiInputBase-root": {
                color: "#ffffff", // White text for input fields
              },
              "& .MuiTablePagination-selectLabel": {
                color: "#d1bfa3", // Gold text for label
              },
              "& .MuiTablePagination-displayedRows": {
                color: "#d1bfa3", // Gold text for displayed rows
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Users;
