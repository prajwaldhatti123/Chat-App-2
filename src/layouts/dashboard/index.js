import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav></SideNav>
      <Outlet />
    </Box>
  );
};

export default DashboardLayout;
