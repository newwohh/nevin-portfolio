import "./Intro.css";
import IntroCard from "./IntroCard/IntroCard";
import Sayhi from "./SayHi/SayHi";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "aqua",
      main: "aqua",
      dark: "aqua",
      contrastText: "aqua",
    },
    secondary: {
      light: "aqua",
      main: "aqua",
      dark: "aqua",
      contrastText: "aqua",
    },
  },
});

const card = (
  <div className="intro-container">
    <div>
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hi, my name is
          </Typography>
          <Typography variant="h1" component="div" className="H1">
            Nevin Raju
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            I'm a self taught web developer with a passion for building
            efficient <br /> websites and web applications using core
            technologies such as HTML5,CSS3 and Javscript.
          </Typography>
          <Sayhi />
        </CardContent>
      </React.Fragment>
    </div>
    <div>
      <IntroCard />
    </div>
  </div>
);

export default function Intro() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
