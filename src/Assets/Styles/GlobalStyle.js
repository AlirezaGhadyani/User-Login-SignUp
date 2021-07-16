import { createGlobalStyle } from "styled-components";
import TitleFont from '../Fonts/Lalezar.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: titleFont;
    src: url(${TitleFont});
}

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

body{
    font-family: titleFont;
    direction: rtl;
}

`;

export default GlobalStyle;