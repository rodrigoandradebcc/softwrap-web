import React from 'react';
import { Container, Content } from './styles';

import SideBar from '../../components/SideBar';

interface IDataForm {
  id: string;
  city: string;
  cpf: string;
  email: string;
  maritalStatus: string;
  name: string;
  state: string;
}

interface IEditFormProps {
  location: { state: { user: IDataForm } };
}

const ShowUser: React.FC<IEditFormProps> = ({ location }) => {
  const { user } = location.state;
  return (
    <>
      <SideBar />
      <Container>
        <Content>
            <h2>{user.name}</h2>
            <div>
              <strong>E-mail</strong>
              <span>{user.email}</span>
            </div>
            <div>
              <strong>Estado civil</strong>
              <span>{user.maritalStatus}</span>
            </div>
            <div>
              <strong>CPF</strong>
              <span>{user.cpf}</span>
            </div>
            <div>
              <strong>Cidade</strong>
              <span>{user.city}</span>
            </div>
            <div>
              <strong>Estado</strong>
              <span>{user.state}</span>
            </div>
        </Content>
      </Container>
    </>
  );
};

export default ShowUser;
