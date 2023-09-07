import styled from "@emotion/styled";
import React, { useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const CustomHeader = styled(Box)`
  padding: 23px;
  box-shadow: 0px 1px 0px 0px rgba(41, 120, 29, 0.13);
  .container {
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

const socialLinks = [
  { id: 1, imgSrc: "Twitter.svg", altText: "Twitter", socialURL: "https://twitter.com/IQLAND_AI" },
  { id: 2, imgSrc: "FB.svg", altText: "Facebook", socialURL: "https://www.facebook.com/profile.php?id=61550296633055" },
  { id: 3, imgSrc: "Tiktok.svg", altText: "Tiktok", socialURL: "https://www.tiktok.com/@iqland.ai" },
  { id: 4, imgSrc: "Instagram.svg", altText: "Instagram", socialURL: "https://www.instagram.com/iqland.ai/" },
  { id: 5, imgSrc: "LinkedIn.svg", altText: "LinkedIn", socialURL: "https://www.linkedin.com/company/96654559/admin/feed/posts/" },
  { id: 6, imgSrc: "redit.svg", altText: "Redit", socialURL: "https://www.reddit.com/user/IQLAND" },
];

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
            display: { sm: "none" },
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
            display: { sm: "none" },
          }}
        >
          {socialLinks.map((link) => (
            <MenuItem key={link.id}>
              <Box component={Link} to={link?.socialURL ?? ""} target="_blank">
                <img src={`${process.env.PUBLIC_URL}/images/${link.imgSrc}`} alt={link.altText} />
              </Box>
            </MenuItem>
          ))}
        </Menu>
        <Box
          sx={{
            display: { sm: "flex", xs: "none" },
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
          {socialLinks.map((link) => (
            <Box component={Link} to={link?.socialURL ?? ""} key={link.id} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/images/${link.imgSrc}`} alt={link.altText} />
            </Box>
          ))}
        </Box>
        <Box component={Link} to="/login" sx={{ ml: "auto", display: "inline" }}>
          <Button
            sx={{
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
        </Box>
      </div>
    </CustomHeader>
  );
};
