import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  max-width: 1120px;
`;

export const Content = styled.div`
  width: 100%;

  form {
    text-align: center;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 24px;
  }

  a {
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }

  button {
    background: #ff9000;
    height: 56px;
    text-align: center;
    width: 50%;

    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
