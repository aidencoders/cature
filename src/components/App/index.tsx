import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import theme from "../../styles/theme";
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
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const getCatData = async () => {
      const { data } = await axios.get<ImageData[], AxiosResponse<ImageData[]>>(
        "https://api.thecatapi.com/v1/breeds",
      );

      setImages(data);
    };

    getCatData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchForm />
      <ImgContainer images={images} />
    </ThemeProvider>
  );
}

export default App;
