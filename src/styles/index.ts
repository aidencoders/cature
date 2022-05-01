import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import mainFont from "./fonts/SpoqaHanSansNeo-Regular.otf";

const GlobalStyles = createGlobalStyle`
  ${reset};

  body {
    height: auto;
    min-height: 100vh;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
}

    @font-face {
      font-display: block;
      font-family: "Spoqa Han Sans";
      font-style: normal;
      font-weight: 400;
      src: url("${mainFont}");
    }

    font-family: "Spoqa Han Sans";
  }

  img {
    user-select: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 0.3em;
  }

  a {
    &:hover {
      text-decoration: none;
    }

    &:focus {
      outline: none;
    }
  }

  ul,
  ul li {
    list-style: none;
  }

  input {
    &:focus {
      background: rgba(247, 223, 2, 0.3);
      outline: none;
    }
  }
`;

export default GlobalStyles;
