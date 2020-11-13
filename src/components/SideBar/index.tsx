import React, { useCallback, useEffect, useState } from 'react';

import { AiOutlineTeam, AiOutlineUserAdd } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import IconSideBar from '../IconSideBar';

import { Container } from './styles';


const SideBar: React.FC = () => {

  
  const [iconTeamActive, setIconTeamActive] = useState(false);
  const [iconUserAddActive, setIconUserAddActive] = useState(false);
  
  useEffect(() => {
    if(window.location.toString().includes('/dashboard')) {
      setIconTeamActive(true);
    } else {
      setIconUserAddActive(true);
    }
  }, []);

  return (
    <Container>
        <nav>
          <Link to="/dashboard">
            <IconSideBar icon={AiOutlineTeam}
              isActive={iconTeamActive} />
          </Link>
          <Link to="/">
            <IconSideBar icon={AiOutlineUserAdd}
             isActive={iconUserAddActive} />
          </Link>
        </nav>
    </Container>
  );
};

export default SideBar;
