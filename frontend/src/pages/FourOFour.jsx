import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FourOFour = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Grid item xs={12} md={8}>
        <Typography variant="h2" color="error" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for doesn't exist. Click the button below to go back to the Home page.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate("/")}
          style={{ marginTop: "10px" }}
        >
          Go to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default FourOFour;
