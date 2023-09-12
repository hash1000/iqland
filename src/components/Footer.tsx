import { Terms } from "./Terms";
import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

type Props = {};

const CustomFooter = styled(Box)`
  padding: 18px;
  border-top: 1px solid #d3e3da;
  background-color: #29781d;
  color: white;
`;

export const Footer = (props: Props) => {
  return (
    <CustomFooter>
      <Container
        sx={{
          display: "flex",
          justifyContent: {sm:"space-between",xs:"center"},
          flexDirection: {sm:"row",xs:"column"},
          gap:1,
          alignItems: "center",
          "@media (min-width: 1200px)": { 
            maxWidth: "1312px",
          },
        }}
      >
        <Terms />
        {/* <Typography>Site Map</Typography> */}
      </Container>
    </CustomFooter>
  );
};
