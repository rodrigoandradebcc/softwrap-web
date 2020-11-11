import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 32px;
  h2 {
        color: #6F52ED;
        margin-bottom: 16px;
        font-weight: 600;
        text-align: center;
  }
  width: 60%;
  height: 50%;
  background: #FFF;
  margin-left: 64px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 1px 20px rgba(0, 0, 0, 0.1);
`;

export const User = styled.div`
  max-width: 720px;
  span {
    color: #373B53;
  }
  li {
    align-items: center;
  }
  button {
    margin-right: 16px;
    background: none;
    border: none;
  }
  div {
    display: flex;
    margin-left: auto;
  }
`;
 