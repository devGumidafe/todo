import { useThemeContext } from "./context/ThemeProvider";
import { TodoList } from "./todo/TodoList";
import { css } from "@emotion/css";

export const Main = () => {
  const { theme } = useThemeContext();

  const container = css`
    background-color: ${theme.bgColor};
  `;

  return (
    <div className={container}>
      <TodoList />
    </div>
  );
};
