import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
    margin: 10px;
    padding: 0;
  }

  li {
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    margin: 8px 0;
    padding: 15px;
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 1fr;
  }

  li > span:last-child {
    text-align: right;
  }

  body, input, button {
    font-family:  'Roboto Slab', serif !important;
    font-size: 16px;
    h1, h2, h3, h4, h5,h6, strong{
      font-weight: 500;
    }
    button{
      cursor: pointer;
    }
  }

`;
