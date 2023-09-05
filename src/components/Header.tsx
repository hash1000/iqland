import styled from "@emotion/styled";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {};

const CustomHeader = styled(Box)`
  padding: 23px;
  box-shadow: 0px 1px 0px 0px rgba(41, 120, 29, 0.13);

  & .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1312px;
  }
`;

export const Header = React.memo(({}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomHeader>
      <div className="container">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            p: "10px",
            display: {
              sm: "none",
            },
          }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            display: {
              sm: "none"
            }
          }}
        >
          <MenuItem>
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/Twitter.svg`} alt="twitter" />
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/FB.svg`} alt="facebook" />
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/Tiktok.svg`} alt="Tiktok" />
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/Instagram.svg`} alt="Instagram" />
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/LinkedIn.svg`} alt="LinkedIn" />
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/redit.svg`} alt="redit" />
            </a>
          </MenuItem>
        </Menu>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "none",
            },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",

            "& img": {
              height: "32px",
              aspeceRatio: 1,
            },
          }}
        >
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/images/Twitter.svg`} alt="twitter" />
          </a>
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/images/FB.svg`} alt="facebook" />
          </a>
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/images/Tiktok.svg`} alt="Tiktok" />
          </a>
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/images/Instagram.svg`} alt="Instagram" />
          </a>
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/images/LinkedIn.svg`} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/images/redit.svg`} alt="redit" />
          </a>
        </Box>
        <Button
          sx={{
            ml: "auto",
            textTransform: "capitalize",
            bgcolor: "#29781D",

            "&:hover": {
              bgcolor: "#29781D",
            },
          }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </CustomHeader>
  );
});
