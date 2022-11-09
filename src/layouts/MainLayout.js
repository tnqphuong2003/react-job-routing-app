import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Header from "../components/Header";

function MainLayout() {
  return (
    <Stack>
      <Header />

      <Outlet />
    </Stack>
  );
}

export default MainLayout;
