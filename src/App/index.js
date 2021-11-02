import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Sudoku from "../Sudoku";
import { GlobalStyles } from "./globalStyles";
import { setLastKey } from "./mainSlice";
import { theme } from "./theme";

const App = () => {
  const dispatch = useDispatch();
  const keyReaction = (event) => {
    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      event.preventDefault();
    }

    dispatch(setLastKey(event.key));
  };


  useEffect(() => {
    window.addEventListener("keydown", keyReaction); // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Sudoku />
    </ThemeProvider>
  );
}

export default App;
