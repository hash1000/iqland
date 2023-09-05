import React from "react";
import { DefaultLayout } from "../components/Layouts";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {};

export const FAQs = (props: Props) => {
  const faqs = [
    {
      title: "Accordion 1",
      ariaControls: "panel1a-content",
      id: "panel1a-header",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      title: "Accordion 2",
      ariaControls: "panel2a-content",
      id: "panel2a-header",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <DefaultLayout sx={{ background: "#EDF2F6" }}>
      <Box
        sx={{
          p: "1.5rem",
          
          "& .container": {
            width: "100%",
            maxWidth: "1312px",
            mx: "auto",

          }
        }}
      >
        <div className="container">
        {faqs.map(faq => (
          <Accordion
            key={faq.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={faq.ariaControls}
              id={faq.id}
              sx={{
                color: "#29781D",
                background: "rgba(41, 120, 29, 0.10)",
              }}
            >
              <Typography fontWeight={700} fontSize={20}>
                {faq.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.text}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        </div>
      </Box>
    </DefaultLayout>
  );
};
