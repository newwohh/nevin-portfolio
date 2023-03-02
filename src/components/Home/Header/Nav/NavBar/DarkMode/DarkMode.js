import * as React from "react";
import Switch from "@mui/material/Switch";
import "./DarkMode.css";

export default function DarkMode(props) {
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <Switch
      defaultChecked
      inputProps={{ "aria-label": "controlled" }}
      className="dm-btn"
      onChange={props.change}
      checked={props.check}
    />
  );
}
