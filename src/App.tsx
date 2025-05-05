import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import SkillsTools from "./components/SkillsTools";
import Experience from "./components/Experience";
// import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactPage from "./components/Contacts";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#0f172a",
        paper: "#0f172a",
      },
      text: {
        primary: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box>
        {/* Add padding top to offset fixed AppBar */}
        <Box id="about-me">
          <ProfileSection />
        </Box>
        <Box sx={{ pt: 8 }} id="skills-tools">
          <SkillsTools />
        </Box>
        <Box sx={{ pt: 8 }} id="experience">
          <Experience />
        </Box>
        <Box sx={{ pt: 4 }} id="projects">
          <Projects />
        </Box>
        {/* <Box id="education">
          <Education />
        </Box> */}
        <Box id="contact">
          <ContactPage />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
