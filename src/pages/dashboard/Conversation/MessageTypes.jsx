import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Timeline = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={2}
    >
      <Divider width="46%"></Divider>
      <Typography variant="caption" color={theme.palette.text}>
        {obj.text}
      </Typography>
      <Divider width="46%"></Divider>
    </Stack>
  );
};

const MsgText = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={obj.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: obj.incoming
            ? theme.palette.mode === "light"
              ? "#deedf8"
              : "#6c757d"
            : "#06bee1",
          borderRadius: "1rem",
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: obj.incoming ? theme.palette.text : "#fff" }}
        >
          {obj.message}{" "}
        </Typography>
      </Box>
    </Stack>
  );
};

const MediaMsg = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={obj.incoming ? "start" : "end"}>
      <Box
        sx={{
          backgroundColor: obj.incoming
            ? theme.palette.mode === "light"
              ? "#deedf8"
              : "#6c757d"
            : "#06bee1",
          borderRadius: "0.5rem",
          width: "max-content",
        }}
      >
        <Stack>
          <Typography
            variant="body2"
            pl={1}
            pt={1}
            sx={{ color: obj.incoming ? "#38b000" : "#fff" }}
          >
            ~ {faker.name.fullName()}{" "}
          </Typography>
          <img
            src={obj.img}
            alt={obj.message}
            style={{
              objectFit: "cover",
              maxHeight: "210px",
              borderRadius: "0.5rem",
            }}
          ></img>
          <Typography
            variant="body2"
            pl={1}
            sx={{ color: obj.incoming ? theme.palette.text : "#fff" }}
          >
            {obj.message}
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"end"}>
          {" "}
          <Typography
            sx={{
              color: obj.incoming ? theme.palette.text : "#fff",
              fontSize: "0.7rem",
            }}
          >
            1:08 pm
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export { Timeline, MsgText, MediaMsg };
