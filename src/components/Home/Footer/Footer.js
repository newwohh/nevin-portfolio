import "./Footer.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="newwohh.github.io">
        Nevin Raju
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 7,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          minHeight: "150px",
        }}
      >
        <Container maxWidth="sm" style={{ textAlign: "center" }}>
          <Link href="https://github.com/newwohh/">
            <GitHubIcon className="icons" />
          </Link>
          <Link href="https://www.instagram.com/newwohh/">
            <InstagramIcon className="icons" />
          </Link>
          <Link
            href="https://twitter.com/RajuNevin?t=70bNQGfVxpcN5SGSUAm8JA&s=09"
            className="icons"
          >
            <TwitterIcon />
          </Link>
          <Typography variant="body1">
            Living, learning, & leveling up one day at a time.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
