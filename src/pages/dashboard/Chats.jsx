import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/customMUIComponents";

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "25rem",
        backgroundColor: "#f8faff",
        boxShadow: "0px opx 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={3}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed></CircleDashed>
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709ce6"></MagnifyingGlass>
              <StyledInputBase
                aria-label="search for chats"
                placeholder="Search..."
              >
                <TextField></TextField>
              </StyledInputBase>
            </SearchIconWrapper>
          </Search>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
