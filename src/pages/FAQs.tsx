import React from "react";
import {DefaultLayout} from "../components/Layouts";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {faqs} from "../utils/appData";

export const FAQs = () => {
  const FAQTitle = styled(Typography)`
    font-weight: 700;
    font-size: 20px;
    @media screen and (max-width: 1100px) {
      font-size: 16px;
    }
    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  `;

  const MainTitle = styled(Typography)`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    @media screen and (max-width: 1100px) {
      font-size: 26px;
    }
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  `;

  const FAQDesc = styled(Typography)`
    @media screen and (max-width: 800px) {
      font-size: 14px;
    }
    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
  `;

  return (
    <DefaultLayout sx={{background: "#EDF2F6"}}>
      <Box
        sx={{
          p: "23px",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {faqs &&
          faqs.map((faq) => (
            <Box
              key={faq.id}
              sx={{
                marginBottom: "30px",
              }}
            >
              {faq.title && <MainTitle>{faq.title}</MainTitle>}
              {faq.data &&
                faq.data.map((faqData: any) => (
                  <Accordion key={faqData.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={faqData.id}
                      id={faqData.id}
                      sx={{
                        background: "rgba(41, 120, 29, 0.10)",
                      }}
                    >
                      <FAQTitle>{faqData.title}</FAQTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FAQDesc>
                        <p>{faqData.text}</p>
                        <ul>
                          {faqData.List &&
                            faqData.List.map((faqList: any) => (
                              <li key={faqList.id}>
                                <strong>{faqList.title}</strong>
                                {` `}
                                {faqList.text}
                              </li>
                            ))}
                        </ul>
                      </FAQDesc>
                    </AccordionDetails>
                  </Accordion>
                ))}
              {faq?.description && (
                <Typography sx={{marginTop: "15px", fontSize: "13px"}}>
                  {faq.description}
                </Typography>
              )}
            </Box>
          ))}
      </Box>
    </DefaultLayout>
  );
};
