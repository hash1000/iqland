import React from "react";
import { Header, Footer } from "../../components";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import Footer1 from "../Footer1";

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
};

const CustomLayoutContainer = styled(Box)`
  height: auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export function DefaultLayout({ children, sx }: Props) {
  return (
    <CustomLayoutContainer sx={sx}>
      <Header />
      {children}
      {/* <Footer1 /> */}
      <Footer />
    </CustomLayoutContainer>
  );
}
