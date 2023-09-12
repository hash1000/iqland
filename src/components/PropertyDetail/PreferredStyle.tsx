import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

interface PreferredStyleProps {
  onFormChange: any;
  formData: {
    image: string;
    title: string;
  };
}

const PreferredStyle: React.FC<PreferredStyleProps> = ({
  onFormChange,
  formData,
}) => {
  const CardData = [
    {
      image: `${process.env.PUBLIC_URL}/images/Craftsman.png`,
      title: "Craftsman",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Cape_Cod.png`,
      title: "Cape Cod",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Craftsman.png`,
      title: "Victorian",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Traditional.png`,
      title: "Traditional",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Spanish.png`,
      title: "Spanish",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Craftsman.png`,
      title: "Contemporary",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Craftsman.png`,
      title: "Vacation",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Craftsman.png`,
      title: "Coast at",
    },
  ];
  // Use the useMediaQuery hook to check the screen width
  const isMobile = useMediaQuery("(max-width: 599px)");
  const isTablet = useMediaQuery("(max-width: 959px)");
  const numCardsToShow = isMobile ? 2 : isTablet ? 2 : 4;
  const [selectedCard, setSelectedCard] = React.useState(-1);

  const handleCardClick = (image: string, title: string, index: number) => {
    onFormChange({ image, title });
    setSelectedCard(index);
  };
  return (
    <Box sx={{ width: "100%", pt: "0px",}}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCardsToShow}, 1fr)`,
        }}
      >
        {CardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              border:
                selectedCard === index
                  ? "1px solid #DAE6E1"
                  : "1px solid #BCD2BE",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              p: "10%",
              backgroundColor:
                selectedCard === index ? "#BCD2BE" : "transparent",
              ".css-66l59o-MuiPaper-root-MuiCard-root": {
                borderRadius: "0px",
                boxShadow: "none",
              },
              ".css-1bryo94-MuiPaper-root-MuiCard-root": {
                borderRadius: "0px",
                boxShadow: "none",
              },
            }}
            onClick={() => handleCardClick(card.image, card.title, index)}
          >
            <Card
              sx={{
                bgcolor: "transparent",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                className="cardBox"
                component="img"
                alt={card.title}
                image={card.image}
                sx={{ width: "95%", height:"95%"}}
              />
              <CardContent sx={{ pb: 0 }}>
                <Typography>{card.title}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PreferredStyle;
