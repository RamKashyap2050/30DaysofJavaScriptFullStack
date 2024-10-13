import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
//Material UI or MUI is widely popular tool which is used for styling in Modern websites that Provide pre styled Components
// To understand it in deep Think of it as like this <Button /> component essentially, means a function Button(){ return (<div><button styles={{XXXXX props to pass customzed styles}}></button></div>)}
//All such components come with their own set preset deeply written code
//AppBar is the default Navbar which comes with styles from MUI
//Typography is your go to Span to H1 to H6 it can be anything for text displays depending on your props
//Card and its properties directly give you a card with photo content, sub content and many other options with pre defined styles
//List and ListItems you can Consider UL and LI with amazing styles whose display alignment and a lot can be changed based on props
//Grid or Grid API is display organizer for the styles consider it a display:grid property for div but with props you can play with the alignment
const About = () => {
  const navigate = useNavigate();
  const RedirectToHomePage = () => navigate("/");

  return (
    <>
      {/* AppBar for Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            30 Days of Full-Stack Development
          </Typography>
          <IconButton color="inherit" onClick={RedirectToHomePage}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content Section */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ padding: "50px" }}
      >
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                About the 30 Days Full-Stack Development Tutorial
              </Typography>
              <Typography variant="body1" paragraph>
                This series is designed to take you from the basics of
                JavaScript, React, and Node.js to more advanced topics like
                state management, DevOps tools, and CI/CD pipelines. Each day
                will build on the last, ensuring a smooth learning curve.
              </Typography>
              <Typography variant="h5" gutterBottom>
                What You'll Learn:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Days 1-8: Vanilla JavaScript Basics and Advanced Concepts" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Days 9-16: React - Components, Props, Hooks, and Routing" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Days 17-20: Redux, State Management, and Context API" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Days 21-26: NodeJS, MongoDB, PostgreSQL, Express and Much More " />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Days 27-30: Hands on Full Stack Project" />
                </ListItem>
              </List>
              <Typography variant="body1" paragraph>
                By the end of this series, you'll have hands-on experience
                building full-stack applications and deploying them using modern
                tools.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={RedirectToHomePage}
                style={{ marginTop: "20px" }}
              >
                Go Back to Home
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
