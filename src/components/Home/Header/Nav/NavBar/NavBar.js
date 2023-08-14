import * as React from "react";
import DarkMode from "./DarkMode/DarkMode";
import "./NavBar.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { TextField } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const drawerWidth = 240;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        N
      </Typography>
      <Divider />
      <List>
        <Link to="top" spy={true} smooth={true}>
          <ListItem key={"Home"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="to-skills" spy={true} smooth={true}>
          <ListItem key={"Skills"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Skills"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="mentoring" spy={true} smooth={true}>
          <ListItem key={"Mentoring"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Mentoring"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#002D62", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Nevin
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="top" spy={true} smooth={true}>
              <Button key="Home" sx={{ color: "#fff" }}>
                Home
              </Button>
            </Link>
            <Link to="to-about">
              <Button key="About Me" sx={{ color: "#fff" }}>
                About Me
              </Button>
            </Link>
            <Link to="to-skills" spy={true} smooth={true}>
              <Button key="Skills" sx={{ color: "#fff" }}>
                Skills
              </Button>
            </Link>

            <Button onClick={handleOpen}>Contact Me</Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Hi, send me your feedbacks
                  </Typography>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Your e-mail"
                    variant="filled"
                    size="small"
                  />
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    defaultValue="Type message"
                    variant="filled"
                  />
                </Box>
              </Fade>
            </Modal>

            <Link to="mentoring" spy={true} smooth={true}>
              <Button key="Mentoring" sx={{ color: "#fff" }}>
                Mentoring
              </Button>
              <DarkModeIcon />
            </Link>
            <DarkMode change={props.change} checked={props.check} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
// export default NavBar;
