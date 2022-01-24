import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: 0;
    }
    main {
        padding: 64px 32px;      
    }
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 22px;
    }
    h3 {
        font-size: 18px;
    }
`;

export default GlobalStyles;
