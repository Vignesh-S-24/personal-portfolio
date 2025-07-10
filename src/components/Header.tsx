import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CodeIcon from "@mui/icons-material/Code";
import { useEffect, useState } from "react";

const sections = [
  { label: "About", id: "about-me" },
  { label: "Skills & Tools", id: "skills-tools" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about-me");
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes shine {
        0% {
          background-position: 200% center;
        }
        100% {
          background-position: -200% center;
        }
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-20%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#0f172a",
          boxShadow:
            "0 4px 6px rgba(159, 104, 240, 0.3), 0 1px 3px rgba(34, 211, 238, 0.2)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <IconButton
              sx={{
                backgroundColor: "#0e0e0e",
                width: 40,
                height: 40,
                "&:hover": { backgroundColor: "#1a1a1a" },
              }}
            >
              <CodeIcon sx={{ color: "white" }} />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                color: "transparent",
                background: "linear-gradient(to right, #9f68f0, #22d3ee)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                animation: "shine 3s linear infinite",
                borderRadius: 1,
                display: "inline-block",
                fontSize: "1.8rem",
              }}
            >
              Vignesh
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{
                  background: "linear-gradient(to right, #9f68f0, #1e293b)",
                  borderRadius: "50%",
                  transition: "background 0.3s",
                  color: "#fff",
                  zIndex: 1301,
                }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              {menuOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "64px",
                    left: 0,
                    width: "100%",
                    background: "#0f172a",
                    animation: "slideDown 0.4s ease",
                    zIndex: 1300,
                    borderTop: "1px solid #1e293b",
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <List>
                    {sections.map(({ label, id }) => (
                      <ListItem
                        key={id}
                        disablePadding
                        onClick={() => handleScroll(id)}
                        sx={{ mb: 1 }}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: 2,
                            ml: 2,
                            mr: 2,
                            background:
                              activeSection === id
                                ? "linear-gradient(to right, #5b21b6, #2563eb)"
                                : "transparent",
                            color: activeSection === id ? "#fff" : "#cbd5e1",
                            transition: "0.3s",
                            "&:hover": {
                              background:
                                "linear-gradient(to right, #3730a3, #2563eb)",
                              color: "#fff",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: "#a5b4fc", minWidth: 32 }}>
                            <StarIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={label}
                            primaryTypographyProps={{
                              fontWeight: activeSection === id ? 700 : 500,
                            }}
                          />
                          <ArrowForwardIosIcon
                            sx={{
                              fontSize: 16,
                              color: activeSection === id ? "#fff" : "#64748b",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              {sections.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => handleScroll(id)}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "1rem",
                    borderBottom:
                      activeSection === id
                        ? "2px solid #8e2de2"
                        : "2px solid transparent",
                    borderRadius: 0,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderImage:
                        "linear-gradient(to right, #8e2de2, #4a00e0)",
                      borderImageSlice: 1,
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
