import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  LinearProgress,
  Button,
  Collapse,
  IconButton,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const WorkerManagement = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleExpandClick = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: "Job Project 1",
      date: "20 March 2024",
      time: "12:50 AM",
      progress: 60,
      members: 4,
    },
    {
      id: 2,
      title: "Job Project 2",
      date: "20 March 2024",
      time: "12:50 AM",
      progress: 50,
      members: 4,
    },
    {
      id: 3,
      title: "Job Project 3",
      date: "20 March 2024",
      time: "12:50 AM",
      progress: 97,
      members: 4,
    },
    {
      id: 4,
      title: "Job Project 4",
      date: "20 March 2024",
      time: "12:50 AM",
      progress: 30,
      members: 4,
    },
  ];

  const tasks = [
    {
      id: 1,
      name: "Jone Doe",
      project: "Job Project 2",
      date: "22 March 2024",
      time: "12:50 AM",
      description: "Lorem ipsum dolor sit amet...",
      progress: 8,
    },
    {
      id: 2,
      name: "Jone Doe",
      project: "Job Project 2",
      date: "22 March 2024",
      time: "12:50 AM",
      description: "Lorem ipsum dolor sit amet...",
      progress: 2,
    },
    {
      id: 3,
      name: "Jone Doe",
      project: "Job Project 2",
      date: "22 March 2024",
      time: "12:50 AM",
      description: "Lorem ipsum dolor sit amet...",
      progress: 6,
    },
  ];

  return (
    <Box sx={{ padding: 1 }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        mb={2}
      >
        <Typography variant="h5" gutterBottom>
          Worker Management
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          mt={{ xs: 2, sm: 0 }}
        >
          <TextField
            label="Search orders"
            variant="outlined"
            size="small"
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: { xs: 2, sm: 0 }, marginRight: { sm: 2 } }}
          >
            Search
          </Button>
          <Button variant="outlined" color="primary">
            Add Task
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ mr: 2 }}>JB</Avatar>
          <Box>
            <Typography variant="h6">Josh Baker</Typography>
            <Typography variant="body2" color="textSecondary">
              Chief Project Manager
            </Typography>
          </Box>
        </Box>
        <Typography>Team Size: Under 25+ Worker</Typography>
      </Box>

      {projects.map((project) => (
        <Paper key={project.id} sx={{ mb: 2, p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{project.title}</Typography>
            <Typography>Hyundai i20</Typography>
            <Typography>
              {project.members} team members assigned for this section
            </Typography>
            <Typography>
              {project.date} {project.time}
            </Typography>
            <IconButton onClick={() => handleExpandClick(project.id)}>
              {expandedProject === project.id ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box sx={{ width: "60%" }}>
              <LinearProgress variant="determinate" value={project.progress} />
            </Box>
            <Typography>{project.progress}%</Typography>
          </Box>
          <Collapse
            in={expandedProject === project.id}
            timeout="auto"
            unmountOnExit
          >
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {tasks
                .filter((task) => task.project === project.title)
                .map((task) => (
                  <Grid item xs={12} md={4} key={task.id}>
                    <Paper sx={{ p: 2 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Avatar sx={{ mr: 2 }}>JD</Avatar>
                        <Box>
                          <Typography variant="body1">{task.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            Co Worker
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography>Working on job project 2</Typography>
                        <Box>
                          <Typography variant="body2" color="textSecondary">
                            {task.date}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {task.time}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        Working Task Description
                      </Typography>
                      <Typography variant="body2">
                        {task.description}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 2 }}
                      >
                        <Box sx={{ width: "100%", mr: 1 }}>
                          <LinearProgress
                            variant="determinate"
                            value={(task.progress / 10) * 100}
                          />
                        </Box>
                        <Typography variant="body2">
                          {task.progress}/10
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Collapse>
        </Paper>
      ))}
    </Box>
  );
};

export default WorkerManagement;
