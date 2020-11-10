import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: (#fff, 0.5);
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Content = styled.div`
  margin: 250px auto;
  width: 500px;
  background: #ff9000;
  text-align: center;
  border-radius: 10px;
  padding: 10px;

  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }

  footer {
    .confirm {
      margin-right: 10px;
      outline: none;
    }
  }
`;
