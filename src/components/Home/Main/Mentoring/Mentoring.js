import "./Mentoring.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Mentoring() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="mentoring-box"
      id="mentoring"
      style={{ borderColor: "#002D62", marginLeft: "-120px" }}
    >
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            typography: "body1",
            mx: "auto",
            border: 1,
          }}
          className="mentr"
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              direction: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Free Mentorships
          </Typography>
          <TabContext
            value={value}
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                textAlign: "center",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ mx: "auto" }}
                centered
              >
                <Tab label="ONE-On-ONE" value="1" />
                <Tab label="Group" value="2" />
                <Tab label="Short" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" centered sx={{ alignItems: "center" }}>
              {" "}
              One-on-one mentorship involves a direct and personalized approach
              to mentorship. This type of mentorship involves working closely
              with a mentor who provides individualized guidance and support
              tailored to the needs and goals of the mentee. The mentee is able
              to receive one-on-one attention from the mentor, which allows for
              more in-depth discussions and a more focused approach to
              problem-solving. One-on-one mentorship can be particularly
              beneficial for those who require a more personalized approach to
              learning or those who need guidance on specific aspects of their
              career or personal development.
            </TabPanel>
            <TabPanel value="2">
              {" "}
              Group mentorship involves a more collaborative approach to
              mentorship, where the mentee is part of a group that receives
              mentorship from one or more mentors. In this type of mentorship,
              the mentee has the opportunity to learn from multiple perspectives
              and interact with other individuals who share similar goals and
              challenges. Group mentorship can be a great way to build a network
              of peers and mentors, which can provide ongoing support and
              encouragement throughout one's career. Group mentorship can be
              particularly effective for those who thrive in a collaborative
              learning environment and enjoy exchanging ideas with others.
            </TabPanel>
            <TabPanel value="3">
              {" "}
              Short-term mentorship, as the name suggests, involves a mentorship
              relationship that is for a limited time period, usually several
              weeks to a few months. This type of mentorship can be beneficial
              for those who need specific guidance or support on a particular
              project, skill, or task. Short-term mentorship can provide focused
              support that allows the mentee to achieve their goals within a
              shorter timeframe. Additionally, short-term mentorship can be an
              effective way to try out mentorship and see if it's a good fit
              before committing to a longer-term relationship. Short-term
              mentorship can be particularly helpful for individuals who are
              looking to learn new skills quickly or those who need support to
              achieve a specific goal.
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </div>
  );
}
