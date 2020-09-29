import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #232129;
  border: 2px solid #232129;
  padding: 16px;
  border-radius: 10px;
  padding: 16px;

  svg {
    margin-right: 10px;
    color: #666;
  }

  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;

    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }
`;
