import styled, { css } from 'styled-components';

interface IconActiveProps {
    isActive: boolean;
}

export const Container = styled.div<IconActiveProps>`
    ${(props) => props.isActive && css`
        width: 42px;
        height: 42px;
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: white;
        animation: container 1s;
        svg {
            color: #6F52ED;
        }
    `}

    ${(props) => !props.isActive && css`
        width: 42px;
        height: 42px;
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: transparent;
        svg {
            color: white;
        }
    `}
 
    @keyframes container {
        from {
            background-color: transparent;
        }
        to {
            background-color: white;
        }
    }
`;