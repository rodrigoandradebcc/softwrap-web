import React from 'react';
import { Container } from './styles';

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
        <div>
          <p>
            <h1>{user.name}</h1>
            <br />
            E-mail:
            {user.email}
            <br />
            Estado Civil:
            {user.maritalStatus}
            <br />
            CPF:
            {user.cpf}
            <br />
            Cidade:
            {user.city}
            <br />
            Estado:
            {user.city}
          </p>
        </div>
      </Container>
    </>
  );
};

export default ShowUser;
