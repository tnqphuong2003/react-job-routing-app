import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoginPage from "./LoginPage";
import JobDetail from "./JobDetail";

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function JobCard({ job }) {
  const [jobDetailOpen, setJobDetailOpen] = React.useState(false);
  const handleJobDetailOpen = () => setJobDetailOpen(true);
  const handleJobDetailClose = () => setJobDetailOpen(false);

  const [loginFormOpen, setLoginFormOpen] = React.useState(false);
  const handleLoginFormOpen = () => setLoginFormOpen(true);
  const handleLoginFormClose = () => {
    setLoginFormOpen(false);
    setJobDetailOpen(true);
  };

  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper
        elevation={12}
        sx={{
          width: 300,
          height: 270,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          {job.title}
        </Typography>
        <Divider />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div>
            {job.skills.slice(0, 4).map((skill, index) => (
              <Chip
                key={index}
                size="small"
                color="error"
                label={skill}
                sx={{
                  m: "2px",
                  fontSize: 8,
                  height: 16,
                  display: "inline-flex",
                }}
              />
            ))}
          </div>
          <Typography
            variant="body1"
            paragraph={true}
            sx={{
              fontSize: 14,
              margin: "8px 0px 0px",
            }}
            color="text.secondary"
          >
            {job.description}
          </Typography>
          <Box sx={{ marginTop: "auto", textAlign: "center" }}>
            <Button
              onClick={() =>
                !auth.user ? setLoginFormOpen(true) : setJobDetailOpen(true)
              }
              size="small"
              sx={{
                color: "black",
                backgroundColor: "#ffa726",
                padding: "4px 10px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Paper>
      <JobDetail
        open={jobDetailOpen}
        handleClose={handleJobDetailClose}
        job={job}
      />
      <LoginPage open={loginFormOpen} handleClose={handleLoginFormClose} />
    </ThemeProvider>
  );
}
