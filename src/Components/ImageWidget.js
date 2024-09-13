import { Box } from "@mui/material";
import React from "react";

const ImageWidget = ({ scrollRef, images }) => {
  return (
    <Box
      ref={scrollRef}
      sx={{
        display: "flex",
        overflowX: "auto",
        mt: 4,
        position: "relative",
        "&::-webkit-scrollbar": {
          height: "1px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          paddingTop: "22px",
          overflow: "visible",
          marginLeft: 6,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "20px",
              marginRight: "10px",
              filter: "grayscale(100%)",
              transition: "filter 0.3s ease, transform 0.3s ease",
              zIndex: 1,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = "grayscale(0%)";
              e.currentTarget.style.transform =
                "translateY(-20px) rotate(-3deg)";
              e.currentTarget.style.zIndex = "10";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = "grayscale(100%)";
              e.currentTarget.style.transform = "translateY(0px) rotate(0deg)";
              e.currentTarget.style.zIndex = "1";
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageWidget;
