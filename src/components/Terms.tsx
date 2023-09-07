import { Box, Link } from "@mui/material";
import React from "react";

export const Terms = React.memo(() => {
  return (
    <Link
      href="#"
      sx={{
        fontSize: "16px",
        color: '#979797',
        textDecoration: 'none',
      }}
    >
      Terms and conditions
    </Link>
  );
});
