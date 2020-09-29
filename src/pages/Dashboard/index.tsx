import React, { useState, useEffect } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container, Button } from './styles';
import Header from '../../components/Header';

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
      <Header />
      <Container>
        <h1>Listagem de Usuários</h1>
        <ul>
          {allUsers?.map(user => (
            <li key={user.cpf}>
              <a href="/">{user.name}</a>
              <div>
                <Button
                  className="buttonEye"
                  onClick={() => showUser(user)}
                  type="submit"
                >
                  Ver +
                </Button>
                <Button type="submit" onClick={() => goToForm(user)}>
                  <FiEdit size={20} />
                </Button>
                <Button type="submit" onClick={() => deleteUser(user.id)}>
                  <FiTrash2 size={20} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Dashboard;
