import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import profilePic from "../assets/download.jpg";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Rock-Paper-Scissors Game",
    description:
      "Created an interactive Rock Paper Scissors game with HTML, CSS, and JavaScript. This project was a great learning experience in building dynamic web applications.",
    image: profilePic,
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "To-DO List Web",
    description:
      "Built a to-do list application using HTML, CSS, and JavaScript. Key features include adding tasks with due dates, deleting tasks, and marking tasks as complete.",
    image: profilePic,
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Drive-in cars-rental",
    description:
      'Designed the UI/UX for a "Drive-In Cars Rental" web application in Figma. Focused on creating a seamless and efficient booking process for car rentals.',
    image: profilePic,
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            display: "inline-block",
            pb: 1,
            color: "#fff",
          }}
        >
          Projects
        </Typography>
        <Box
          mt={1}
          height="3px"
          width="100px"
          mx="auto"
          sx={{
            background: "linear-gradient(to right, #8e2de2, #4a00e0)",
            borderRadius: "2px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          overflowX: "auto",
          pb: 2,
          justifyContent: "center",
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#6a11cb",
            borderRadius: 4,
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}  
          >
            <Card
              sx={{
                bgcolor: "#1e293b",
                border: "2px solid #6a11cb",
                borderRadius: 3,
                color: "white",
                display: "flex",
                flexDirection: "column",
                width: 300,
                minWidth: 300,
                flexShrink: 0,
                height: 450,
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
                sx={{ p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="#cbd5e1">
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #9f68f0, #22d3ee)",
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                    textTransform: "none",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      background: "linear-gradient(to right, #9f68f0, #22d3ee)",
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                    },
                  }}
                  href={project.liveLink}
                >
                  Live preview
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    textTransform: "none",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                  href={project.githubLink}
                >
                  Check on GitHub
                </Button>
              </Box>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
