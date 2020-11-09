import styled from 'styled-components';
import { shade } from 'polished';

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
  width: 80%;
  height: 50%;
  background: white;
  margin-left: 64px;
  display: flex;
  align-self: center;
  justify-content: center;
  
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    button {
      text-align: center;
      margin: 0 auto;
      margin-top: 32px;
    }
    padding: 16px;
  }
  border-radius: 8px;
  box-shadow: 5px 1px 20px rgba(0, 0, 0, 0.1);
  
`;
