import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background-color: #8E05C2;
    color: #000;
    list-style: none;
}
    
button { 
    cursor: pointer;
}
`;