import { ReactElement } from "react";
import { render as testRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

import { RootState } from "../../store/index";
import theme from "../../styles/theme";
import imageReducer from "../../features/image/imageSlice";

type CustomRenderOptions = {
  preloadedState?: RootState;
  store?: EnhancedStore;
  renderOptions?: Omit<RenderOptions, "wrapper">;
};

const render = (
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer: imageReducer }),
    ...renderOptions
  }: CustomRenderOptions = {},
) => {
  function Wrapper({ children }: any) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return testRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { render };
