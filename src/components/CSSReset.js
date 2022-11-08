import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
/*Reset*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: sans-serif;
}
/* Next-JS */
html {
    display: flex;
    flex-direction: column;
    min-width: 100%;
}
body {
    display: flex;
    flex: 1;
}
#__next{
    display: flex;
    flex: 1;
}
/*Global*/
button,
a{
    text-decoration: none;
    opacity: 1;
    transform: .3s;
    
}
a:hover, button:hover{
    opacity: .5;
}
a:focus, button:focus{
    opacity: .5;
}
`;