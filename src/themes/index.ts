import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500,700&display=swap');
  html, body {
    background-color: rgb(240, 242, 245);
    color: rgb(102, 102, 102);
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    background-color: #fff;
    letter-spacing: 1px
  }
  * {
    box-sizing: border-box;
  }
`;
