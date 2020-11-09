import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    padding: 8px 32px;
    border: none;
    border-radius: 8px;
    background: #6F52ED;
    color: white;
    transition: background-color 0.2s;
    font-weight: 500;
    &:hover {
        background: ${shade(0.1, '#6F52ED')}
    }
`;
