import { Box, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { toggleSideBar, updateSidebarType } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { CaretLeft, X } from "phosphor-react";

const Shared = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "25rem",
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 0px 2px rgba(0,0,0,0.25)"
            : "0px 0px 2px #fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Stack sx={{ height: "100%" }} alignItems={"center"}>
        {/* heading shared message with icon */}
        <Box
          sx={{
            boxShadow:
              theme.palette.mode === "light"
                ? "0px 0px 2px rgba(0,0,0,0.25)"
                : "0px 0px 2px #fafafa",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft></CaretLeft>
            </IconButton>
            <Typography variant="subtitle2" fontSize={16}>
              Shared Messages
            </Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleSideBar());
              }}
            >
              <X></X>
            </IconButton>
          </Stack>
        </Box>

        {/* Tab bar media , links and docs */}
        <Tabs value={tabValue} handleTabChange={handleTabChange}>
          <Tab label="Media"></Tab>
          <Tab label="Link"></Tab>
          <Tab label="Docs"></Tab>
        </Tabs>

        {/* body of tabs */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            overflowY: "auto",
            flexGrow: 1,
          }}
          p={3}
          spacing={3}
        ></Stack>
      </Stack>
    </Box>
  );
};

export default Shared;

{
  /* Tab  bar */
}
{
  /* <Tabs value={tabValue} handleTabChange={handleTabChange}>
<Tab label="Media"></Tab>
<Tab label="Link"></Tab>
<Tab label="Docs"></Tab>
</Tabs>
<Stack
  sx={{
    height: "100%",
    position: "relative",
    overflowY: "auto",
    flexGrow: 1,
  }}
  p={3}
  spacing={3}
></Stack> */
}
