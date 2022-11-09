import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import jobs from "../jobs.json";
import JobCard from "./JobCard";

const itemPerPage = 5;
function HomePage() {
  const [page, setPage] = React.useState(1);

  return (
    <div style={{ maxWidth: "1150px", margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "3rem",
          gap: "3rem",
        }}
      >
        {jobs.slice((page - 1) * itemPerPage, page * itemPerPage).map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Pagination
          count={
            jobs.length % itemPerPage === 0
              ? jobs.length / itemPerPage
              : Math.floor(jobs.length / itemPerPage) + 1
          }
          page={page}
          onChange={(event, val) => {
            setPage(val);
          }}
          color="error"
          sx={{ button: { color: "#ffffff" }, marginBottom: "50px" }}
        />
      </Box>
    </div>
  );
}

export default HomePage;
