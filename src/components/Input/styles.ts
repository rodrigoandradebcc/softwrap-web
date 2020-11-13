import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background: #FFF;
  padding: 16px;

  color: red;
  font-size: 12px;
  height: 3rem;

  @media screen and (max-width: 720px) {
    font-size: 5px;
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  svg {
    margin-right: 10px;
    color: #6F52ED;
  }

  & + div {
    margin-top: 16px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    color: #373B53;

    background: transparent;
    border: 0;

    &::placeholder {
      color: #A6ACBE;
    }
  }
`;
