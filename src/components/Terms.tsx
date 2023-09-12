import { Box } from "@mui/material";
import React from "react";

export const Terms = React.memo(() => {
  return (
    <Box
      sx={{
        fontSize: "16px",
        color: 'white',
        textAlign: "center"
      }}
    >
      © Copyright 2023. All rights reserved.
    </Box>
  );
});
