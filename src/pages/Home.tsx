import { Box, Button, Modal, Typography } from "@mui/material";
import { DefaultLayout } from "../components/Layouts";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";

export const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "390px",
    bgcolor: "background.paper",
    borderRadius: "17px",
    boxShadow: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    pt: 2,
    px: 4,
    pb: 3,
    width: "calc(100% - 6rem)",
  };

  return (
    <DefaultLayout sx={{ background: "#EDF2F6" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",

          '& > img[alt="logo"]': {
            height: {
              xs: "35px",
              sm: "55px",
              md: "55px",
              lg: "55px",
              xl: "55px",
            },
            mb: "48px",
          },

          '& > img[alt="help"]': {
            height: "14px",
            aspectRatio: "1",
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/Logo 1.svg`} alt="logo" />
        <Paper
          sx={{
            px: "17px",
            mb: "27px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "45px",
            maxWidth: "548px",
            borderRadius: "8px",
            border: "1px solid rgba(41, 120, 29, 0.23)",
            background: "rgba(41, 120, 29, 0.10)",
            boxShadow: "none",
          }}
        >
          {/* <SearchIcon
            sx={{
              fill: "#628979",
            }}
          /> */}
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Integrate Constant Contact"
            inputProps={{ "aria-label": "Integrate Constant Contact " }}
          />
          <img src={`${process.env.PUBLIC_URL}/images/Question icon.svg`} alt="help" />
        </Paper>

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
          <Button variant="contained" onClick={() => setShowModal(true)}>
            Join the waitlist
          </Button>
          <Button variant="contained">FAQ</Button>
        </Box>

        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            "& .MuiModal-backdrop": {
              backgroundColor: "rgba(41, 120, 29, 0.10)",
              backdropFilter: "blur(4px)",
            },
          }}
        >
          <Box sx={{ ...style, maxWidth: '200px' }}>
            <Typography
              variant="h5"
              sx={{
                color: "#29781D",
                fontSize: "25px",
                fontWeight: "700",
              }}
              component="h2"
            >
              Congrats!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: "16px",
              }}
              component="h3"
            >
              Your are on the waitlist.
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                mt: "1rem",
                background: "#29781D",
                color: "white",

                "&:hover": {
                  background: "#29781D",
                },
              }}
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
    </DefaultLayout>
  );
};
