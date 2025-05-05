// import { Box, Grid, Typography } from "@mui/material";

// const educationData = [
//   {
//     year: "2019",
//     description:
//       "Graduated from Sai Vidyanikethan High School in 2019, earning a grade point average of 8.2 in my secondary school examinations. Successfully completed the requirements for 10th grade, demonstrating academic proficiency.",
//   },
//   {
//     year: "2021",
//     description:
//       "Completed intermediate education at Sri Surya Junior College in 2021, specializing in the MPC (Mathematics, Physics, Chemistry) stream and achieving a grade point average of 6.2.",
//   },
//   {
//     year: "2024",
//     description:
//       "Graduated from Aditya Degree College with a Bachelor of Computer Applications (BCA) degree in 2024, achieving a GPA of 8.4.",
//   },
//   {
//     year: "Present",
//     description:
//       "Currently pursuing a Master of Computer Applications (MCA) degree at Andhra University, with an expected graduation date of 2026.",
//   },
// ];

// export default function EducationTimeline() {
//   return (
//     <Box sx={{ backgroundColor: "#0f172a", color: "#ffffff", py: 8, px: 4 }}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ textAlign: "center", color: "#ffffff" }}
//       >
//         Education
//       </Typography>

//       <Box sx={{ position: "relative", mt: 8 }}>
//         {/* Timeline Line */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "28px",
//             left: 0,
//             right: 0,
//             height: "2px",
//             background: "linear-gradient(to right, #5eead4, #818cf8)",
//             zIndex: 1,
//           }}
//         />

//         <Grid container spacing={4} justifyContent="space-between">
//           {educationData.map((item, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={3}
//               key={index}
//               sx={{ position: "relative", textAlign: "left" }}
//             >
//               {/* Circle indicator */}
//               <Box
//                 sx={{
//                   width: 16,
//                   height: 16,
//                   borderRadius: "50%",
//                   background: "linear-gradient(to right, #5eead4, #818cf8)",
//                   boxShadow: "0 0 15px #5eead4, 0 0 15px #818cf8",
//                   position: "absolute",
//                   top: 0,
//                   left: "calc(50% - 8px)",
//                   zIndex: 2,
//                 }}
//               />

//               {/* Year */}
//               <Typography
//                 variant="h6"
//                 fontWeight="bold"
//                 gutterBottom
//                 sx={{ textAlign: "center", mt: 4 }}
//               >
//                 {item.year}
//               </Typography>

//               {/* Description */}
//               <Typography
//                 variant="body2"
//                 sx={{
//                   textAlign: "left",
//                   px: 2,
//                   color: "#CBD5E1",
//                   fontWeight: 400,
//                   lineHeight: 1.8,
//                 }}
//               >
//                 {item.description}
//               </Typography>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }
