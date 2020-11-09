import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
   width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  background: white;
`;

export const Button = styled.div`
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

export const Content = styled.div`
  
`;
