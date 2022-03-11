import { createGlobalStyle } from "styled-components";
import { Colors } from "../../colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    background: ${Colors.primary};
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  input,
  button,
  textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
