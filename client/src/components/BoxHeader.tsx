import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  icon?: React.ReactNode; // optional
  title: string; // required
  subtitle?: string; // optional
  sideText?: string;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" m="-0.7rem 0 -0.1rem 0">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <FlexBetween>
        <Typography
          variant="h5"
          fontWeight="700"
          color={palette.secondary[500]}
          mb="-0.1rem"
        >
          {sideText}
        </Typography>
      </FlexBetween>
    </FlexBetween>
  );
};

export default BoxHeader;
