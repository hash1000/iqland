import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: "#EDF2F6",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: 150, color: "Black" }}>
        404
      </Typography>
      <Typography
        variant="body1"
        sx={{ margin: "2rem 2rem", fontSize: 20, fontWeight: 600, color: "#444",display:"flex",textAlign: "center"}}
      >
        Ooops!!! The page you are looking for is not found
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "13px",

          "& .MuiButton-root": {
            height: "33px",
            width: "119px",
            whiteSpace: "nowrap",
            borderRadius: "4px",
            border: "1px solid rgba(41, 120, 29, 0.23)",
            background: "rgba(41, 120, 29, 0.10)",
            boxShadow: "none",
            fontWeight: "700",
            color: "#29781D",
            textTransform: "capitalize",
            fontSize: "12px",
            lineHeight: "15px",

            "&:hover": {
              background: "rgba(41, 120, 29, 0.10)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "inline",
            textTransform: "uppercase",
          }}
          component={Link}
          to="/"
        >
          <Button variant="contained">Back to home</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
