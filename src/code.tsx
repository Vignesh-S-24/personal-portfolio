// /* Folder structure suggestion:

// src/
// ├── components/
// │   ├── AboutMe.tsx
// │   ├── SkillsTools.tsx
// │   ├── Experience.tsx
// │   ├── Education.tsx
// │   ├── Header.tsx
// │   └── ProfileSection.tsx
// ├── assets/
// │   └── profile.png (use the uploaded image)
// ├── App.tsx
// └── index.tsx
// */

// // components/Header.tsx
// import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

// export default function Header() {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         <Typography variant="h6">S.K. portfolio</Typography>
//         <Box>
//           {['About me', 'Skills & Tools', 'Experience', 'Projects', 'Education'].map((item) => (
//             <Button key={item} color="inherit" sx={{ textTransform: 'none', fontWeight: 500 }}>{item}</Button>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// // components/ProfileSection.tsx
// import { Box, Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import profilePic from "../assets/profile.png";

// export default function ProfileSection() {
//   return (
//     <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" px={4} py={6}>
//       <Box flex={1} minWidth="300px">
//         <Typography variant="h2" fontWeight="bold">Kanuri,</Typography>
//         <Typography variant="h3" fontWeight="bold" color="primary">Web Designer</Typography>
//         <Typography mt={2} color="text.secondary">
//           I'm a UI/UX and Frontend Developer passionate about crafting user-friendly and visually appealing web experiences...
//         </Typography>
//         <Button variant="contained" sx={{ mt: 3, borderRadius: '50px', background: 'linear-gradient(to right, #9f68f0, #22d3ee)' }}>
//           Download CV
//         </Button>
//       </Box>
//       <Box component={motion.div} flex={1} minWidth="300px" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
//         <img src={profilePic} alt="Profile" style={{ maxWidth: "100%", borderRadius: "50%" }} />
//       </Box>
//     </Box>
//   );
// }

// // components/AboutMe.tsx
// import { Box, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// export default function AboutMe() {
//   return (
//     <Box px={4} py={6} component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
//       <Typography variant="h4" fontWeight="bold">About Me</Typography>
//       <Typography mt={2} color="text.secondary">
//         I’m a creative frontend developer with strong knowledge in Figma, HTML, CSS, and JavaScript, always aiming to deliver pixel-perfect UI...
//       </Typography>
//     </Box>
//   );
// }

// // components/SkillsTools.tsx
// import { Box, Typography, Chip } from "@mui/material";

// const skills = ['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'MUI', 'Git'];

// export default function SkillsTools() {
//   return (
//     <Box px={4} py={6}>
//       <Typography variant="h4" fontWeight="bold">Skills & Tools</Typography>
//       <Box mt={2} display="flex" gap={2} flexWrap="wrap">
//         {skills.map(skill => <Chip key={skill} label={skill} color="primary" />)}
//       </Box>
//     </Box>
//   );
// }

// // components/Experience.tsx
// import { Box, Typography } from "@mui/material";

// export default function Experience() {
//   return (
//     <Box px={4} py={6}>
//       <Typography variant="h4" fontWeight="bold">Experience</Typography>
//       <Typography mt={2} color="text.secondary">
//         Worked on multiple projects involving web design, prototyping in Figma, and implementing modern frontend solutions.
//       </Typography>
//     </Box>
//   );
// }

// // components/Education.tsx
// import { Box, Typography } from "@mui/material";

// export default function Education() {
//   return (
//     <Box px={4} py={6}>
//       <Typography variant="h4" fontWeight="bold">Education</Typography>
//       <Typography mt={2} color="text.secondary">
//         Bachelor’s Degree in Computer Science – XYZ University
//       </Typography>
//     </Box>
//   );
// }

// // App.tsx
// import { CssBaseline, Container } from "@mui/material";
// import Header from "./components/Header";
// import ProfileSection from "./components/ProfileSection";
// import AboutMe from "./components/AboutMe";
// import SkillsTools from "./components/SkillsTools";
// import Experience from "./components/Experience";
// import Education from "./components/Education";

// export default function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Header />
//       <Container maxWidth="lg">
//         <ProfileSection />
//         <AboutMe />
//         <SkillsTools />
//         <Experience />
//         <Education />
//       </Container>
//     </>
//   );
// }
