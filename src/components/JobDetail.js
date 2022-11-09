import { Box, Chip, Divider, Modal, Stack, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "rgb(12,12,12)",
  borderRadius: "10px",
  border: "0.5px solid #fff",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function JobDetail({ job, open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style} spacing={1}>
        <Typography variant="h4" color="text.primary" gutterBottom>
          {job.title}
        </Typography>
        <Divider />
        <Typography color="text.secondary">{job.description}</Typography>
        <Typography variant="h6" color="text.primary">
          Skills:
        </Typography>
        <div>
          {job.skills.slice(0, 4).map((skill, index) => (
            <Chip
              key={index}
              size="small"
              color="error"
              label={skill}
              sx={{
                m: "2px",
                fontSize: 10,
                height: 16,
                display: "inline-flex",
              }}
            />
          ))}
        </div>
      </Stack>
    </Modal>
  );
}

export default JobDetail;
