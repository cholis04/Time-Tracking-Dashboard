import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: none;
    }

    body {
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;    
        background-color: hsl(226, 43%, 10%);
        color:white;
    }

    img {
        max-width:100%;
        display:block;
    }

`;

export default GlobalStyle;
