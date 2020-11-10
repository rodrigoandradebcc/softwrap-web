import React, { useState } from 'react';

import { AiOutlineTeam, AiOutlineUserAdd } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const SideBar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <Container>
        <nav>
          <Link to="/dashboard">
            <AiOutlineTeam size={30} color="#FFF" />
          </Link>
          <Link to="/">
            <AiOutlineUserAdd size={30} color="#FFF"/>
          </Link>
        </nav>
    </Container>
  );
};

export default SideBar;
