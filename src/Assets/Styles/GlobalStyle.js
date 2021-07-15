import { createGlobalStyle } from "styled-components";
import TitleFont from '../Fonts/Lalezar.ttf';
import MainFont from '../Fonts/Tanha.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: titleFont;
    src: url(${TitleFont});
}

@font-face {
    font-family: MainFont;
    src: url(${MainFont});
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
    font-family: mainFont;
    direction: rtl;
}

`;

export default GlobalStyle;