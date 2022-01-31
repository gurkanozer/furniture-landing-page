import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --color-white:#FFF;
    --color-black:#000;
    --color-light-black:#1E1E1E;
    --color-orange:#E58411;
    --color-dark-gray:#1E2833;
    --color-light-gray:#F7F7F7;
    --color-gray:#EEEEEE;
    --color-very-light-gray:#FAFAFA;
    --fw-bold:700;
    --fw-regular:400;
}
html { font-size: 62.5%; } 
body { 
    font-family:'Raleway', sans-serif;
    font-weight:400;
    background-color:var(--color-white);
    color:var(--color-light-black);
}
*,*::after,*::before{
    box-sizing: border-box;
    padding: 0;
    margin:0;
    font-family:'Raleway', sans-serif;
}
img {
    width: 100%;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color:inherit;
}
button{
    border:none;
    outline:none;
    background:none;
    cursor:pointer;
}

section{
    padding:2.8rem;
    @media (min-width:992px){
        padding:0 8rem;
    }
}
h1{
    font-size:3.8rem;
    color:var(--color-white);
    line-height:160%;
    @media (min-width:992px){
        font-size: 8rem;
    }
}
h2{
    font-size:3.6rem;
    color:var(--color-black);
    line-height:160%;
    @media (min-width:992px){
        font-size:4.2rem;
    }
}
h3{
    font-size:2rem;
    color:var(--color-black);
    @media (min-width:992px){
        font-size:2.4rem;
    }
}
p{
    font-size:1.6rem;
    color:var(--color-light-black);
    line-height:185%;
    @media (min-width:992px){
        font-size:1.8rem;
    }
}
`

export default GlobalStyle;