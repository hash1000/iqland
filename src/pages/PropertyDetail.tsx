import React from "react";
import { DefaultLayout } from "../components/Layouts";
import { Box, Container, Button, Alert, AlertColor } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import PreferredStyle from "../components/PropertyDetail/PreferredStyle";
import SquareFeet from "../components/PropertyDetail/SquareFeet";
import Bathrooms from "../components/PropertyDetail/Bathrooms";
import Stories from "../components/PropertyDetail/Stories_Floor";
import Garage from "../components/PropertyDetail/Garage";
import Basement from "../components/PropertyDetail/Basement";
import CostOfLand from "../components/PropertyDetail/CostOfLand";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const steps = [
  "Your Preferred Style",
  "Square Feet",
  "Bathrooms",
  "Stories/Floors",
  "Garage",
  "Basement",
  "Cost of Land",
];

interface FormData {
  PreferredStyle: {
    image: string;
    title: string;
  };
  SquareFeet: string;
  Bathrooms: {
    fullBathrooms: string;
    halfBathrooms: string;
  };
  Stories_Floors: string;
  Garage: string;
  Basement: string;
  Cost_of_Land: string;
}

const PropertyDetail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<FormData>({
    PreferredStyle: { image: "", title: "" },
    SquareFeet: "",
    Bathrooms: {
      fullBathrooms: "",
      halfBathrooms: "",
    },
    Stories_Floors: "",
    Garage: "",
    Basement: "",
    Cost_of_Land: "",
  });
  // eslint-disable-next-line
  const [preferredStyleValid, setPreferredStyleValid] =
    React.useState<boolean>(true);
  // eslint-disable-next-line
  const [squareFeetValid, setSquareFeetValid] = React.useState<boolean>(true);
  // eslint-disable-next-line
  const [bathrooms, setBathrooms] = React.useState<boolean>(true);
  // eslint-disable-next-line
  const [stories_Floors, setStories_Floors] = React.useState<boolean>(true);
  // eslint-disable-next-line
  const [garage, setGarage] = React.useState<boolean>(true);
  // eslint-disable-next-line
  const [basement, setBasement] = React.useState<boolean>(true);
  // eslint-disable-next-line
  const [cost_of_Land, setCost_of_Land] = React.useState<boolean>(true);
  const [selectError, setSelectError] = React.useState<string>("");
  const [NotificationType, setNotificationType] =
    React.useState<AlertColor>("error");
  const [openErrorSnackbar, setOpenErrorSnackbar] =
    React.useState<boolean>(false);
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleFormChange = (fieldName: string, value: any) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (!formData.PreferredStyle.title || !formData.PreferredStyle.image) {
        setPreferredStyleValid(false);
        setSelectError("Please select a Preferred Style.");
        setOpenErrorSnackbar(true);
        return;
      }
      setPreferredStyleValid(true);
    } else if (activeStep === 1) {
      if (!formData.SquareFeet) {
        setSquareFeetValid(false);
        setSelectError("Please select a Square Feet value.");
        setOpenErrorSnackbar(true);
        return;
      }
      setSquareFeetValid(true);
    } else if (activeStep === 2) {
      if (!formData.Bathrooms.fullBathrooms) {
        setBathrooms(false);
        setSelectError("Please select a Full-Bathrooms");
        setOpenErrorSnackbar(true);
        return;
      } else if (!formData.Bathrooms.halfBathrooms) {
        setBathrooms(false);
        setSelectError("Please select a Half-Bathrooms");
        setOpenErrorSnackbar(true);
        return;
      }
      setBathrooms(true);
    } else if (activeStep === 3) {
      if (!formData.Stories_Floors) {
        setStories_Floors(false);
        setSelectError("Please select Stories/Floors");
        setOpenErrorSnackbar(true);
        return;
      }
      setStories_Floors(true);
    } else if (activeStep === 4) {
      if (!formData.Garage) {
        setGarage(false);
        setSelectError("Please select Garage");
        setOpenErrorSnackbar(true);
        return;
      }
      setGarage(true);
    } else if (activeStep === 5) {
      if (!formData.Basement) {
        setBasement(false);
        setSelectError("Please select Basement");
        setOpenErrorSnackbar(true);
        return;
      }
      setBasement(true);
    } else if (activeStep === 6) {
      if (!formData.Cost_of_Land) {
        setCost_of_Land(false);
        setSelectError("Please select Cost_of_Land");
        setOpenErrorSnackbar(true);
        return;
      }
      setCost_of_Land(true);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const GetFormData = () => {
    if (
      !formData.Cost_of_Land
    ) {
      setNotificationType("error");
      setSelectError("Please select Cost_of_Land");
      setOpenErrorSnackbar(true);
    } else {
      // console.log("Form Data:", formData);
      setNotificationType("success");
      setSelectError("Your data successfully submitted");
      setOpenErrorSnackbar(true);
      setTimeout(() => {
        setOpenErrorSnackbar(false);
      }, 3000);
      navigate("/property-detail");
      setActiveStep(0);
    }
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const getActiveStepName = (stepIndex: number) => {
    return steps[stepIndex];
  };
  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false);
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "green",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "green",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#BCD2BE",
      "@media (min-width: 768px)": {
        borderTopWidth: 5,
      },
      "@media (min-width: 1200px)": {
        borderTopWidth: 6,
      },
      borderTopWidth: 2,
      borderRadius: 0,
    },
  }));
  return (
    <DefaultLayout sx={{ background: "#EDF2F6" }}>
      <Container>
        <Box
          sx={{
            width: "100%",
            mt: "5%",
            mb: 2,
          }}
        >
          <Box sx={{ width: "96%", m: "auto" }}>
            <Stepper connector={<QontoConnector />} activeStep={activeStep}>
              {steps.map((_, index) => {
                const stepProps: { completed?: boolean } = {};
                return (
                  <Step
                    key={index}
                    {...stepProps}
                    sx={{
                      paddingLeft: "0",
                      paddingRight: "0",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        bgcolor:
                          activeStep === index
                            ? "green"
                            : index < activeStep
                            ? "green"
                            : "#BCD2BE",
                        width: "10px",
                        height: "10px",
                        "@media (min-width: 768px)": {
                          width: "15px",
                          height: "15px",
                        },
                        "@media (min-width: 1200px)": {
                          width: "15px",
                          height: "15px",
                        },
                        borderRadius: "30px",
                        padding: "0 !important",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "180%",
                          height: "180%",

                          "@media (min-width: 768px)": {
                            width: "250%",
                            height: "250%",
                          },
                          "@media (min-width: 1200px)": {
                            width: "350%",
                            height: "350%",
                          },
                          borderRadius: "50%",
                          border: "1px solid",
                          borderColor:
                            activeStep === index
                              ? "green"
                              : index < activeStep
                              ? "green"
                              : "#BCD2BE",
                          backgroundColor: "transparent",
                        },
                      }}
                    ></Box>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          {activeStep !== steps.length && (
            <React.Fragment>
              <Box sx={{ mt: "5%" }}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      bgcolor: "#BCD2BE",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      display: "flex",
                      mr: "auto",
                      justifyContent: "center",
                      fontFamily: "oxygen",
                      fontWeight: "700",
                      py: "10px",
                    }}
                  >
                    {getActiveStepName(activeStep)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#DAE6E1",
                    minHeight: "50vh",
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "8px",
                    border: "0.5px solid #BCD2BE",
                    pt: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      overflow: "hidden",
                      width: activeStep === 0 ? "100%" : "50%",
                      "@media (max-width: 600px)": {
                        width: activeStep === 0 ? "100%" : "90%",
                      },
                      "@media (max-width: 768px)": {
                        width: activeStep === 0 ? "100%" : "80%",
                      },
                    }}
                  >
                    {/* content box */}
                    {activeStep === 0 && (
                      <PreferredStyle
                        onFormChange={({
                          title,
                          image,
                        }: {
                          title: string;
                          image: string;
                        }) => {
                          handleFormChange("PreferredStyle", { title, image });
                        }}
                        formData={formData["PreferredStyle"]}
                      />
                    )}
                    {activeStep === 1 && (
                      <SquareFeet
                        formData={formData["SquareFeet"]}
                        onChange={(name: string) => {
                          handleFormChange("SquareFeet", name);
                        }}
                      />
                    )}
                    {activeStep === 2 && (
                      <Bathrooms
                        formData={formData["Bathrooms"]}
                        onChange={(name: string) => {
                          handleFormChange("Bathrooms", name);
                        }}
                      />
                    )}
                    {activeStep === 3 && (
                      <Stories
                        formData={formData["Stories_Floors"]}
                        onChange={(name: string) => {
                          handleFormChange("Stories_Floors", name);
                        }}
                      />
                    )}
                    {activeStep === 4 && (
                      <Garage
                        formData={formData["Garage"]}
                        onChange={(name: string) => {
                          handleFormChange("Garage", name);
                        }}
                      />
                    )}
                    {activeStep === 5 && (
                      <Basement
                        formData={formData["Basement"]}
                        onChange={(name: string) => {
                          handleFormChange("Basement", name);
                        }}
                      />
                    )}
                    {activeStep === 6 && (
                      <CostOfLand
                        formData={formData["Cost_of_Land"]}
                        onChange={(name: string) => {
                          handleFormChange("Cost_of_Land", name);
                        }}
                      />
                    )}
                    {/* Display the error message here */}
                    {selectError && (
                      <Snackbar
                        open={openErrorSnackbar}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        autoHideDuration={3000}
                        onClose={handleCloseErrorSnackbar}
                      >
                        <Alert
                          onClose={handleCloseErrorSnackbar}
                          severity={NotificationType}
                          sx={{ width: "100%" }}
                        >
                          {selectError}
                        </Alert>
                      </Snackbar>
                    )}
                    {/* button box */}
                    <Box
                      sx={{
                        py: "20px",
                        display: "flex",
                        width: activeStep === 0 ? "95%" : "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="success"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ color: "white", bgcolor: "#29781D" }}
                      >
                        Go Back
                      </Button>
                      <Button
                        onClick={() => {
                          handleNext();
                          if (activeStep === steps.length - 1) {
                            GetFormData();
                          }
                        }}
                        variant="contained"
                        color="success"
                        sx={{ color: "white", bgcolor: "#29781D" }}
                      >
                        {activeStep === steps.length - 1 ? "Proceed" : "Next"}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default PropertyDetail;
