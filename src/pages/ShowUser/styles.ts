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
  background: white;
  margin-left: 64px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 5px 1px 20px rgba(0, 0, 0, 0.1);
  color: #373B53;
  div {
    strong {
      color: #6F52ED;
    }
    margin-top: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  div:last-child {
    border-bottom: none;
  }
`;
