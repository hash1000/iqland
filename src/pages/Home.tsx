import {Box, Button, Modal, Paper, InputBase, Typography} from "@mui/material";
import {DefaultLayout} from "../components/Layouts";
import CircularProgress from "@mui/material/CircularProgress";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useToast } from "../components/Layouts/toastContext";

export const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {showToast} = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailPattern.test(email);

    if (isValid) {
      try {
        await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/join_waitlist`,
          {
            email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setShowModal(true);
      } catch (error) {
        console.log();
        showToast(`${(error as Error).message}. Please try again later.`);
      }
    }

    setIsSubmitting(false);
  };

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
    padding: "50px 20px",
    width: "calc(100% - 6rem)",
    outline: 0,
  };

  const closeHandler = () => {
    setEmail("");
    setShowModal(false);
  }

  return (
    <DefaultLayout sx={{background: "#EDF2F6"}}>
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
            mb: "10px",
          },

          '& > img[alt="help"]': {
            height: "14px",
            aspectRatio: "1",
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/logomain.svg`} alt="logo" />
        <Typography sx={{pt:"-10%",mb: "38px", display:"flex", justifyContent:"center",textAlign:"center",color:"#29781D"}}>Shaping the Future of Home Development with Data</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{
            width: "100%",
        }}>
        <Paper
          sx={{
            px: "17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "45px",
            maxWidth: "548px",
            borderRadius: "8px",
            border: "1px solid rgba(41, 120, 29, 0.23)",
            background: "rgba(41, 120, 29, 0.10)",
            boxShadow: "none",
            margin: "0 auto",
            marginBottom: "27px",
          }}
        >
          <InputBase
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type="email"
            required
            sx={{ml: 1, flex: 1}}
            placeholder="Enter your email address"
            inputProps={{"aria-label": "Enter your email address"}}
            value={email}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/Questionicon.svg`}
            alt="help"
          />
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
          <Button
            variant="contained"
            type="submit"
            // onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress
                sx={{
                  width: "20px !important",
                  height: "20px !important",
                  color: "#29781D",
                }}
              />
            ) : (
              "Join the waitlist"
            )}
          </Button>
          <Box
            sx={{
              display: "inline",
            }}
            component={Link}
            to="/faqs"
          >
            <Button variant="contained">FAQ</Button>
          </Box>
        </Box>
        </Box>
        <Modal
          open={showModal}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            "& .MuiModal-backdrop": {
              backgroundColor: "rgba(41, 120, 29, 0.10)",
              backdropFilter: "blur(4px)",
            },
          }}
        >
          <Box sx={{...style, maxWidth: "270px", minWidth: "270px"}}>
            <Box
              sx={{
                width: "100%",
                textAlign: "right",
                position: "absolute",
                top: "15px",
                right: "15px",
              }}
            >
              <Box component={Link} to="/faqs">
                <Box
                  onClick={closeHandler}
                  component="img"
                  sx={{
                    height: 16.5,
                    width: 16.5,
                    cursor: "pointer",
                  }}
                  alt="close"
                  src={`${process.env.PUBLIC_URL}/images/cross.svg`}
                />
              </Box>
            </Box>
            <Box
                component="img"
                sx={{
                  height: 120,
                  width: 120,
                }}
                alt="congrats"
                src={`${process.env.PUBLIC_URL}/images/congrats.png`}
              />
            <Typography
              variant="h5"
              sx={{
                color: "#29781D",
                fontSize: "25px",
                fontWeight: "700",
                lineHeight: '15px',
                mt: "20px",
                mb: "8px",
              }}
              component="h2"
            >
              Congratulations.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                lineHeight: "30px",
                fontSize: "14px",
              }}
              component="h5"
            >
               Congrats! Your are on the waitlist
            </Typography>
            {/* <Button
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

            >
              Close
            </Button> */}
          </Box>
        </Modal>
        </Box>
    </DefaultLayout>
  );
};
