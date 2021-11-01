import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyles } from "./globalStyles";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />     
    </ThemeProvider>
  );
}

export default App;
