import React, { useState, useRef } from "react";
import { Box, Button, IconButton, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TabButton from "./Components/tabsButton";
import ImageWidget from "./Components/ImageWidget";

const MyComponent = () => {
  const [images, setImages] = useState([
    "./download.jpeg",
    "./download.jpeg",
    "./download.jpeg",
    "./download.jpeg",
    "./download.jpeg",
  ]);

  const scrollRef = useRef(null);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const scrollImages = (direction) => {
    const scrollAmount = 160;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Grid container style={{ height: "100vh", backgroundColor: "#000" }}>
      <Grid item xs={12} md={6} />

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            bgcolor: "#363C43",
            p: { xs: 1, sm: 2 },
            borderRadius: 2,
            mb: 4,
            maxWidth: { xs: "90%", md: "80%" },
            marginTop: { xs: "1rem", md: "5rem" },
            marginX: "auto",
          }}
        >
          <TabButton />
        </Box>

        <Box
          sx={{
            bgcolor: "#363C43",
            p: { xs: 1, sm: 2 },
            borderRadius: 2,
            maxWidth: { xs: "90%", md: "80%" },
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 2, sm: 0 },
              }}
            >
              <IconButton
                sx={{
                  color: "#ffffff",
                  marginRight: "10px",
                }}
              >
                <HelpOutlineIcon />
              </IconButton>
              <Button
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#000000",
                  py: { xs: 1, sm: 2 },
                  px: { xs: 2, sm: 4 },
                  borderRadius: 4,
                }}
              >
                Gallery
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                component="label"
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  color: "#ffffff",
                  py: 1,
                  px: 1,
                  marginRight: 3,
                  borderRadius: 10,
                  fontSize: "12px",
                  backgroundColor: "#363C43",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 4)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                ADD IMAGE
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleAddImage}
                />
              </Button>
              <IconButton
                onClick={() => scrollImages("left")}
                sx={{
                  color: "#6F787C",
                  background: "linear-gradient(45deg, #303439, #161718)",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #161718, #303439)",
                  },
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                onClick={() => scrollImages("right")}
                sx={{
                  color: "#6F787C",
                  background: "linear-gradient(45deg, #303439, #161718)",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #161718, #303439)",
                  },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
          <ImageWidget scrollRef={scrollRef} images={images} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
