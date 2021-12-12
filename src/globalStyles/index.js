import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    color: #393c41;
    margin: 0;
    padding: 0;
}

body{
    width: 100%;
}
`;

export default GlobalStyle;