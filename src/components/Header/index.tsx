import React, { useState } from 'react';

import { FiMenu, FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <Container>
      <Content menuVisible={menuVisible}>
        <h1>Softwrap</h1>
        <FiMenu size={34} onClick={() => setMenuVisible(!menuVisible)} />
        <nav>
          <Link to="/dashboard" href="/">
            Listar Usuários
            <FiChevronRight />
          </Link>
          <Link to="/">
            Cadastrar Usuário
            <FiChevronRight />
          </Link>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
