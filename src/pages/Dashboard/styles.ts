import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: calc(100vh - 60px);

  display: flex;
  width: 90%;
  max-width: 1120px;
  flex-direction: column;
  align-items: center;
  margin: 48px auto;
  .buttonEye {
    background: #ff9000;
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 4px;
  }

  ul {
    width: 100%;

    li {
      border-radius: 8px;
      background: #232129;
      padding: 20px 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 420px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      a {
        color: #f4ede8;
        text-decoration: none;
      }
      div {
        display: flex;
        align-items: center;
        @media (max-width: 420px) {
          margin-top: 30px;
        }
      }
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  & + button {
    margin-left: 30px;
  }

  svg {
    color: #f4ede8;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
