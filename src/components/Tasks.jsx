// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box, Typography, CircularProgress } from "@mui/material";
// import axios from "axios";

// const columns = [
//   { field: "taskTitle", headerName: "Task Title", width: 200 },
//   { field: "taskDescription", headerName: "Task Description", width: 250 },
//   { field: "taskListTitle", headerName: "Task List Title", width: 200 },
//   { field: "createdBy", headerName: "Created By (Email ID)", width: 200 },
//   { field: "creationTime", headerName: "Creation Time", width: 150 },
// ];

// const Tasks = () => {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get("https://back-office-panel-w21y.onrender.com/tasklists");
//         const taskData = [];

//         response.data.forEach((user) => {
//           user.todoLists.forEach((todoList) => {
//             todoList.tasks.forEach((task) => {
//               const creationTime = task.createdAt
//                 ? new Date(task.createdAt._seconds * 1000).toLocaleString()
//                 : "N/A";
//               taskData.push({
//                 id: task.taskId,
//                 taskTitle: task.title,
//                 taskDescription: task.description,
//                 taskListTitle: todoList.name,
//                 createdBy: user.email,
//                 creationTime: creationTime,
//               });
//             });
//           });
//         });

//         setRows(taskData);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "91.666667%",
//         margin: "30px auto",
//         padding: "20px",
//         backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
//         borderRadius: "10px",
//         boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//         fontFamily: "Poppins",
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           color: "#ffffff", // White text for contrast
//           textAlign: "center",
//           marginBottom: "20px",
//           fontWeight: "bold",
//         }}
//       >
//         TASKS
//       </Typography>
//       <Box
//         sx={{
//           height: 400,
//           backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
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
//               backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
//             },
//             "& .MuiDataGrid-cell": {
//               color: "#ffffff", // White text for contrast
//             },
//             "& .MuiDataGrid-columnHeaders": {
//               backgroundColor: "rgba(0, 0, 0, 0.7)", // Black background with transparency
//               color: "#000000", // White text for contrast
//               fontWeight: "900", // Extra bold
//               height: "60px", // Increased height
//               fontSize: "1.1rem", // Slightly larger text
//             },
//             "& .MuiDataGrid-footerContainer": {
//               backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent footer
//               "& .MuiTablePagination-root": {
//                 color: "#ffffff", // White text for pagination
//               },
//               "& .MuiSelect-root": {
//                 color: "#ffffff", // White text for dropdowns
//               },
//               "& .MuiInputBase-root": {
//                 color: "#ffffff", // White text for input fields
//               },
//               "& .MuiTablePagination-selectLabel": {
//                 color: "#ffffff", // White text for labels
//               },
//               "& .MuiTablePagination-displayedRows": {
//                 color: "#ffffff", // White text for displayed rows
//               },
//             },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Tasks;
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import axios from "axios";

const columns = [
  { field: "taskTitle", headerName: "Task Title", width: 200 },
  { field: "taskDescription", headerName: "Task Description", width: 250 },
  { field: "taskListTitle", headerName: "Task List Title", width: 200 },
  { field: "createdBy", headerName: "Created By (Email ID)", width: 200 },
  { field: "creationTime", headerName: "Creation Time", width: 150 },
];

const Tasks = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://back-office-panel-w21y.onrender.com/tasklists");
        const taskData = [];

        response.data.forEach((user) => {
          user.todoLists.forEach((todoList) => {
            todoList.tasks.forEach((task) => {
              const creationTime = task.createdAt
                ? new Date(task.createdAt._seconds * 1000).toLocaleString()
                : "N/A";
              taskData.push({
                id: task.taskId,
                taskTitle: task.title,
                taskDescription: task.description,
                taskListTitle: todoList.name,
                createdBy: user.email,
                creationTime: creationTime,
              });
            });
          });
        });

        setRows(taskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Box
      sx={{
        width: "91.666667%",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "rgba(25, 25, 25, 0.8)", // Darker background
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        fontFamily: "Poppins",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#d1bfa3", // Classy gold text for contrast
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)", // Stronger shadow for depth
        }}
      >
        TASKS
      </Typography>
      <Box
        sx={{
          height: 400,
          backgroundColor: "rgba(25, 25, 25, 0.8)", // Darker background
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
              backgroundColor: "rgba(25, 25, 25, 0.8)", // Darker background
            },
            "& .MuiDataGrid-cell": {
              color: "#ffffff", // White text for contrast
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "rgba(0, 0, 0, 0.9)", // Darker column header
              color: "#d1bfa3", // Gold text for contrast
              fontWeight: "900", // Extra bold
              height: "60px", // Increased height
              fontSize: "1.1rem", // Slightly larger text
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "rgba(25, 25, 25, 0.8)", // Dark footer
              "& .MuiTablePagination-root": {
                color: "#d1bfa3", // Gold text for pagination
              },
              "& .MuiSelect-root": {
                color: "#ffffff", // White text for dropdowns
              },
              "& .MuiInputBase-root": {
                color: "#ffffff", // White text for input fields
              },
              "& .MuiTablePagination-selectLabel": {
                color: "#d1bfa3", // Gold text for labels
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

export default Tasks;
