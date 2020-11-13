import React, { useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IconSideBarProps extends IconBaseProps {
    isActive: boolean;
    icon: React.ComponentType<IconBaseProps>;
}

const IconSideBar: React.FC<IconSideBarProps> = ({ isActive, icon: Icon }) => {
    return (
        <Container isActive={isActive}>
            <Icon size={30}/>
        </Container>
    )
}

export default IconSideBar;
