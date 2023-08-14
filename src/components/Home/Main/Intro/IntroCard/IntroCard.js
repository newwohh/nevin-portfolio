import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TypeWriter from "react-typewriter";
import "./IntroCard.css";

export default function IntroCard() {
  return (
    <Card sx={{ minWidth: 275, borderColor: "#002D62" }} className="code-card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <TypeWriter typing={1} className="tw-text">
          &lt;script type="text/javascript"&gt;
          <br /> function getInspiration() {} <br />
          {`if(morningDay == depressed )`}
          <br /> <span style={{ color: "blue" }}>return</span> start Coding get
          Awesome
          <br />
          &lt;script&gt;
        </TypeWriter>
      </CardContent>
    </Card>
  );
}
