import styled from 'styled-components';

export const Container = styled.header`
  width: 64px;
  min-height: 100vh;
  background-color: #373b53;
  nav {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    a:hover {
      svg {
        color: #6f52ed;
      }
    }
  }
  position: absolute;
  top: 0;
  bottom: 0;
`;

interface IContentPros {
  menuVisible: boolean;
}

/* export const Content = styled.div<IContentPros>`
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
`; */
