import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const FooterLinks = [
  {
    heading: "About us",
    subheadings: [
      { text: "Pricing", link: "/pricing" },
      { text: "Enterprise Solutions", link: "/enterprise" },
      { text: "Affiliate Program", link: "/affiliate" },
    ],
    link: "/about",
  },
  {
    heading: "Learn",
    subheadings: [
      { text: "FAQs", link: "/faqs" },
      { text: "Blog", link: "/blog" },
    ],
    link: "/learn",
  },
  {
    heading: "Legal",
    subheadings: [
      { text: "Terms and Conditions", link: "/terms" },
      { text: "Privacy Policy", link: "/privacy" },
    ],
    link: "/legal",
  },
  {
    heading: "Customer Support",
    subheadings: [{ text: "help@iqland.io", link: "mailto:help@iqland.io" }],
    link: "/support",
  },
];
const SocialLinks = [
  {
    title: "Twitter",
    logo: "Footer_Social/Twitter.png",
    link: "https://twitter.com/",
  },
  {
    title: "Facebook",
    logo: "Footer_Social/Facebook.png",
    link: "https://Facebook.com/",
  },
  {
    title: "LinkedIn",
    logo: "Footer_Social/LinkedIn.png",
    link: "https://LinkedIn.com/",
  },
  {
    title: "Instagram",
    logo: "Footer_Social/Instagram.png",
    link: "https://Instagram.com/",
  },
  {
    title: "Tiktok",
    logo: "Footer_Social/Tiktok.png",
    link: "https://Tiktok.com/",
  },
  {
    title: "Reddit",
    logo: "Footer_Social/Reddit.png",
    link: "https://Reddit.com/",
  },
];


const Wrapper = styled(Grid)`
&>.MuiGrid-item {
  @media screen and (max-width:600px) {
    padding-left: 0px !important;
  }
}
`;

const Footer1 = () => {
  return (
    <Box bgcolor="white" color="green" sx={{ fontFamily: "oxygen", py: 6 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Wrapper
            container
            spacing={4}
            sx={{
              ml: "0px",
              mt: "20px",
            }}
          >
            {FooterLinks.map((section, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
                key={index}
                className="helo"
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    transition: "border 0.3s",
                    fontWeight: "700",
                    borderBottom: "2px solid transparent",
                    display: "inline-block",
                    "&:hover": {
                      borderBottom: "2px solid green",
                      display: "inline-block",
                    },
                  }}
                >
                  <NavLink
                    to={section.link}
                    style={{
                      textDecoration: "none",
                      color: "green",
                    }}
                  >
                    {section.heading}
                  </NavLink>
                </Typography>
                {section.subheadings.map((subheading, subIndex) => (
                  <Typography
                    color="black"
                    key={subIndex}
                    sx={{
                      pt: 1,
                      transition: "border 0.3s",
                      borderBottom: "1px solid transparent",
                      width: "fit-content",
                      "&:hover": {
                        borderBottom: "1px solid black",
                        width: "fit-content",
                      },
                    }}
                  >
                    <NavLink
                      to={subheading.link}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "subtitle2",
                      }}
                    >
                      {subheading.text}
                    </NavLink>
                  </Typography>
                ))}
              </Grid>
            ))}
          </Wrapper>
        </Box>
        {/* Render SocialLinks */}
        <Box
          sx={{
            pt: 4,
            display: "flex",
            width: "95%",
            justifyContent: {
              xs: "center",
              md: "space-between",
              lg: "flex-start",
            },
            mx: "auto",
            flexWrap: "wrap",
            gap: { xs: 4, md: 0, lg: "80px" },
          }}
        >
          {SocialLinks.map((socialLink, index) => (
            <Box
              key={index}
              sx={{
                pt: 1,
                transition: "border 0.3s",
                borderBottom: "2px solid transparent",
                "&:hover": {
                  borderBottom: "2px solid green",
                },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <NavLink
                to={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/${socialLink.logo}`}
                  alt={socialLink.title}
                  width="auto"
                  height="17"
                />

                <Typography sx={{ fontWeight: "bold" }}>
                  {socialLink.title}
                </Typography>
              </NavLink>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer1;
