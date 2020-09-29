import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  max-width: 1120px;
  div {
    p {
      h1 {
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
