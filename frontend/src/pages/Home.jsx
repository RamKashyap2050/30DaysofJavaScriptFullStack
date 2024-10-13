import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const RedirectToAboutPage = () => navigate("/about");

  return (
    <div>
      {/* AppBar for Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            30 Days of Full-Stack Development
          </Typography>
          <Button color="inherit" onClick={RedirectToAboutPage}>
            About
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ height: "80vh", padding: "20px" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Welcome to the 30 Days of Full-Stack Development Journey!
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Learn React, JavaScript, Node.js, and DevOps step-by-step with
            practical examples. Whether you're a beginner or an experienced
            developer, this tutorial series will help you level up!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={RedirectToAboutPage}
            size="large"
            style={{ marginTop: "20px" }}
          >
            Start the Journey
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/153/368/original/3d-website-developer-working-on-laptop-illustration-png.png"
            alt="Hero Image"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>

      {/* Features Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ padding: "50px" }}
      >
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Practical Examples</Typography>
              <Typography variant="body1" color="textSecondary">
                Each day brings hands-on tasks to build your understanding and
                confidence.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Modern Technologies</Typography>
              <Typography variant="body1" color="textSecondary">
                Master React, Node.js, DevOps tools, and more.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Community Support</Typography>
              <Typography variant="body1" color="textSecondary">
                Get help from peers and connect with fellow learners along the
                way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
