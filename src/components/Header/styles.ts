import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: #232129;
  display: flex;
  place-content: center;
`;

interface IContentPros {
  menuVisible: boolean;
}

const apperToRight = keyframes`
  from{
    transform: translateX(-100%);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Content = styled.div<IContentPros>`
  max-width: 1120px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    nav {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      background: #232129;
      width: 60%;
      height: 100vh;
      ${props =>
        props.menuVisible &&
        css`
          display: block;
          animation: ${apperToRight} 1s;
        `}
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        color: #f4ede8;
        text-decoration: none;
      }
    }
  }

  @media (min-width: 700px) {
    nav {
      a {
        text-decoration: none;
        color: #f4ede8;
        font-size: 14px;
        transition: color 0.2s;
        &:hover {
          color: ${shade(0.2, '#f4ede8')};
        }
        & + a {
          margin-left: 12px;
        }
      }
    }
    svg {
      display: none;
    }
  }
`;
