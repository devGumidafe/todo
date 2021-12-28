import { container } from "../../styles/components/header-style";
import { useThemeContext } from "../context/ThemeProvider";

export const ChangeTheme = (props) => {
  const { theme, toggleTheme } = useThemeContext();

  const handleIcon = () => {
    toggleTheme();
  };

  return (
    <div className={container(theme)}>
      <div className="top">
        <h1 className="title">TODO</h1>
        <img className="icon" src={theme.icon} alt="icon change theme" onClick={handleIcon} />
      </div>
      {props.children}
    </div>
  );
};
