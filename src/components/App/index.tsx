import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import theme from "../../styles/theme";
import { fetchingImageAsync } from "../../features/image/imageSlice";
import { AppDispatch } from "../../store";

import Header from "../Header";
import SearchForm from "../SearchForm";
import ImgContainer from "../ImgContainer";

export type ImageData = {
  image: {
    id: string;
    url: string;
  };
  name: string;
};

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchingImageAsync());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchForm />
      <ImgContainer />
    </ThemeProvider>
  );
}

export default App;
