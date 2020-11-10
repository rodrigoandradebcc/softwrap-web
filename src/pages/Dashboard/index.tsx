import React, { useState, useEffect } from 'react';
import { FiTrash2, FiEdit, FiEye } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container, Content, User } from './styles';
import SideBar from '../../components/SideBar';
import Button from '../../components/Button';

interface IDataForm {
  id: string;
  city: string;
  cpf: string;
  email: string;
  maritalStatus: string;
  name: string;
  state: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [allUsers, setAllUsers] = useState<IDataForm[]>();
  useEffect(() => {
    const LoadData = async () => {
      const response = await api.get('/users');
      setAllUsers(response.data);
    };
    LoadData();
  }, []);

  const deleteUser = async (id: string) => {
    await api.delete(`/users/${id}`);
    setAllUsers(allUsers?.filter(user => user.id !== id));
  };

  const goToForm = (user: IDataForm) => {
    history.push('/edit', { user });
    console.log(user);
  };

  const showUser = (user: IDataForm) => {
    history.push('/show', { user });
    console.log(user);
  };

  return (
    <>
      <SideBar />
      <Container>
        <Content>
          <h2>Listagem de Usuários</h2>
          <ul>
            {allUsers?.map(user => (
              <User>
              <li key={user.cpf}>
                <span>{user.name}</span>
                <div>
                  <button
                    className="buttonEye"
                    onClick={() => showUser(user)}
                    type="submit"
                  >
                    <FiEye size={20} color="33D69F"/>
                  </button>
                  <button type="submit" onClick={() => goToForm(user)}>
                    <FiEdit size={20} color="FFB800"/>
                  </button>
                  <button type="submit" onClick={() => deleteUser(user.id)}>
                    <FiTrash2 size={20} color="FF4C61"/>
                  </button>
                </div>
              </li>
              </User>
            ))}
          </ul>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
