import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #DFE1EB;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
    margin: 10px;
    padding: 0;
  }

  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 8px 0;
    padding: 15px;
    display: grid;
    grid-template-columns: 3fr 2fr;
  }

  li > span:last-child {
    text-align: right;
  }

  body, input, button {
    font-family:  'Poppins', serif !important;
    font-size: 16px;
    h1, h2, h3, h4, h5,h6, strong{
      font-weight: 500;
    }
    button{
      cursor: pointer;
    }
  }

`;
