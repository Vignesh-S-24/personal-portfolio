import React from "react";
import { Box, Typography, Divider, IconButton, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ContactPage: React.FC = () => {
  const sentence =
    "Feel free to reach out to me for any questions and opportunities!";
  const words = sentence.split(" ");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        maxWidth: 800,
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box>
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
            Contact me
          </Typography>
          <Box
            mt={1}
            height="3px"
            width="120px"
            mx="auto"
            sx={{
              background: "linear-gradient(to right, #8e2de2, #4a00e0)",
              borderRadius: "2px",
            }}
          />
        </Box>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.2rem",
            fontWeight: 500,
            backgroundImage: "linear-gradient(90deg, #a855f7, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1], 
              }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </Typography>
      </Box>

      {/* Adding motion and animation to Stack for upward movement */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 2 }}>
        {[
          {
            icon: <WhatsAppIcon />,
            link: "https://wa.me/your-number",
            color: "success",
          },
          {
            icon: <InstagramIcon />,
            link: "https://www.instagram.com/yourusername",
            color: "secondary",
          },
          {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/yourusername",
            color: "primary",
          },
        ].map((item, index) => (
          <motion.div
            key={index} // Make sure each item has a unique key
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <IconButton
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              color={
                item.color as
                  | "primary"
                  | "success"
                  | "secondary"
                  | "inherit"
                  | "default"
                  | "error"
                  | "info"
                  | "warning"
              }
            >
              {item.icon}
            </IconButton>
          </motion.div>
        ))}
      </Stack>

      <Divider sx={{ width: "100%", my: 2 }} />

      <Box>
        <Typography variant="body2" color="text.secondary">
          Designed & Developed by Vignesh
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © 2025 Vignesh. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactPage;
