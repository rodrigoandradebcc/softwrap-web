import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #FFF;
  padding: 16px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  svg {
    margin-right: 10px;
    color: #6F52ED;
  }

  & + div {
    margin-top: 16px;
  }

  input {
    color: #373B53;

    background: transparent;
    border: 0;

    &::placeholder {
      color: #A6ACBE;
    }
  }
`;
