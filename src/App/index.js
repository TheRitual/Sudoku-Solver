import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Sudoku from "../Sudoku";
import { GlobalStyles } from "./globalStyles";
import { theme } from "./theme";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Sudoku />
    </ThemeProvider>
  );
}

export default App;
