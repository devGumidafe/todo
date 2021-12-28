import { useState } from "react";
import { useThemeContext } from "../context/ThemeProvider";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import {styleLarge, styleSmall} from "../../styles/components/footer-buttons-style";

export const FooterButtons = (props) => {
  const { setState, typeStyle } = props;
  const { theme } = useThemeContext();
  const [option, setOption] = useState("all");

  const style = typeStyle === "large" ? styleLarge : styleSmall;

  const handleChange = (event, option) => {
    setOption(option);
    setState(option);
  };

  return (
    <div className={style(theme)}>
      <ToggleButtonGroup
        value={option}
        exclusive
        onChange={handleChange}
        sx={{
          ".MuiToggleButton-root.Mui-selected": {
            color: `${theme.primary}`,
            backgroundColor: `${theme.bgCard}`,
            border: "none",
          },
          ".MuiToggleButton-root.Mui-selected:hover": {
            color: "none",
            backgroundColor: `${theme.bgCard}`,
          },
          ".MuiToggleButton-root": {
            border: "none",
          },
          ".MuiToggleButton-root:hover": {
            color: `${theme.primary}`,
            backgroundColor: `${theme.bgCard}`,
          },
        }}
      >
        <ToggleButton
          value="all"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            backgroundColor: `${theme.bgCard}`,
            color: `${theme.disableColor}`,
          }}
        >
          All
        </ToggleButton>
        <ToggleButton
          value="active"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            backgroundColor: `${theme.bgCard}`,
            color: `${theme.disableColor}`,
          }}
        >
          Active
        </ToggleButton>
        <ToggleButton
          value="completed"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            backgroundColor: `${theme.bgCard}`,
            color: `${theme.disableColor}`,
          }}
        >
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
