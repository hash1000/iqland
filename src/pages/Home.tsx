import {Box, Button, Modal, Paper, InputBase, Typography} from "@mui/material";
import {DefaultLayout} from "../components/Layouts";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useToast } from "../components/Layouts/toastContext";

export const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {showToast} = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsValidEmail(null);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailPattern.test(email);
    setIsValidEmail(isValid);

    if (isValid) {
      try {
        const response = await axios.post(
          "https://ahmad6192.pythonanywhere.com/join_waitlist",
          {
            email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(JSON.stringify(response.data));
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
    pt: 2,
    px: 4,
    pb: 3,
    width: "calc(100% - 6rem)",
  };

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
            mb: "48px",
          },

          '& > img[alt="help"]': {
            height: "14px",
            aspectRatio: "1",
          },
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/logomain.svg`} alt="logo" />
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
            placeholder="Integrate Constant Contact"
            inputProps={{"aria-label": "Integrate Constant Contact "}}
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
          <Box sx={{...style, maxWidth: "200px"}}>
            <Box
              sx={{
                width: "100%",
                textAlign: "right",
                marginRight: "-30px",
              }}
            >
              <CloseIcon
                onClick={() => setShowModal(false)}
                sx={{
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: "#29781D",
                fontSize: "25px",
                fontWeight: "700",
                mb: "8px",
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
