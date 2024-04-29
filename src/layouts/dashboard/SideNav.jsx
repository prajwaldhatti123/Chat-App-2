import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { MaterialUISwitch } from "../../styles/customMUIComponents";
import useSettings from "../../hooks/useSettings";
import { useState } from "react";

const SideNav = () => {
  const { onToggleMode } = useSettings();
  const theme = useTheme();
  // console.log(theme);
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <>
      {/* whole column */}
      <Box
        sx={{
          height: "100vh",
          backgroundColor: theme.palette.background.paper,
          width: "6rem",
          boxShadow: "0px 0px 5px rgba(0,0,0,0.25)",
          padding: "2rem",
        }}
      >
        {/* outer stack for all buttons and logo */}
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4}>
            {/* logo */}
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            ></Box>

            {/* all buttons */}
            <Stack spacing={3} direction={"column"} alignItems={"center"}>
              {Nav_Buttons.map((i) =>
                i.index === selectedButton ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                      // padding: "1rem",
                    }}
                  >
                    <IconButton
                      key={i.index}
                      sx={{ width: "max-content", color: "white" }}
                    >
                      {i.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    key={i.index}
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    onClick={() => {
                      setSelectedButton(i.index);
                    }}
                  >
                    {i.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "100%" }}></Divider>
              {selectedButton === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                    // padding: "1rem",
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "white" }}>
                    <Gear></Gear>
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelectedButton(3);
                  }}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode === "light" ? "black" : "white",
                  }}
                >
                  <Gear></Gear>
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack alignItems={"center"} spacing={4}>
            <MaterialUISwitch onChange={onToggleMode}></MaterialUISwitch>
            <Avatar src={faker.image.avatar()}></Avatar>
          </Stack>{" "}
        </Stack>
      </Box>
    </>
  );
};

export default SideNav;
