import { createGlobalStyle } from "styled-components";
import TitleFont from '../Fonts/Lalezar.ttf';
import EnFont from '../Fonts/Poppins.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: titleFont;
    src: url(${TitleFont});
}

@font-face {
    font-family: enFont;
    src: url(${EnFont});
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