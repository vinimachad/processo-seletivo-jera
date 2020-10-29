import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI',sans-serif;
        outline: 0;
    }
    
    html,
    body,#root {
        height: 100%;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing:antialiased;
    }
`;
