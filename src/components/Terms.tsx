import { Box } from "@mui/material";
import React from "react";

export const Terms = React.memo(() => {
  return (
    <Box
      component="a"
      href="#"
      sx={{
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "15px",
        color: '#979797',
        textDecoration: 'none',
      }}
    >
      Terms and conditions
    </Box>
  );
});
