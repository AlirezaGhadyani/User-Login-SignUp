import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
}

*,
::before,
::after{
    box-sizing: border-box;
}

`;

export default GlobalStyle;