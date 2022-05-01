import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Header from "../Header";
import SearchForm from "../SearchForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchForm />
    </ThemeProvider>
  );
}

export default App;
