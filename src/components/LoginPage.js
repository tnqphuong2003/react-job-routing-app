import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import FormProvider from "./form/FormProvider";
import FTextField from "./form/FTextField";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#121212",
  border: "0.5px solid #fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
});
const defaultValues = {
  username: "phuongtran",
  password: "123",
};

function LoginPage({ open, handleClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useAuth();

  const { handleSubmit } = methods;
  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    let username = data.username;

    auth.login(username, () => {
      navigate(from, { replace: true });
    });

    handleClose();
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Typography variant="h4" textAlign="center" color="whitesmoke">
                Login
              </Typography>
              <FTextField name="username" label="Username" />
              <FTextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></FTextField>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#d74742",
                  "&:hover": { bgcolor: "rgb(215, 71, 66)" },
                }}
              >
                Login
              </Button>
            </Stack>
          </FormProvider>
        </Box>
      </Modal>
    </>
  );
}

export default LoginPage;
