import { css } from "@emotion/css";
import { Header } from "./components/header/Header";
import { Main } from "./components/Main";
import { fontFamily, fontSize } from "./styles/fonts";
import { CssBaseline } from "@mui/material";
import { NoteProvider } from "./components/context/NoteProvider";
import { ThemeProvider } from "./components/context/ThemeProvider";

export const App = () => {
  const container = css`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 30% 1fr;
    height: 100vh;
    font-family: ${fontFamily};
    font-size: ${fontSize};
  `;

  return (
    <ThemeProvider>
      <CssBaseline />
      <NoteProvider>
        <div className={container}>
          <Header />
          <Main />
        </div>
      </NoteProvider>
    </ThemeProvider>
  );
};
