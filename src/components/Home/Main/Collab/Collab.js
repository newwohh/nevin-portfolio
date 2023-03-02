import "./Collab.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import { useSpring, animated } from "@react-spring/web";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid  #000",
  boxShadow: 24,
  p: 4,
};

export default function Collab() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {" "}
        <div className="collab">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Start a Project with me
            </Typography>
            Interested in working together? We should queue up a time to chat.
            I’ll buy the coffee.
          </CardContent>
          <CardActions
            sx={{
              direction: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Button onClick={handleOpen} sx={{ width: "200px" }}>
              Let's Go
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
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
          </CardActions>
        </div>
      </Card>
    </Box>
  );
}
