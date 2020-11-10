import React, { useRef, useCallback } from 'react';

import {
  FiMail,
  FiUser,
  FiHeart,
  FiGrid,
  FiMap,
  FiMapPin,
} from 'react-icons/fi';
import { Form as FormElement } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
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

const EditForm: React.FC<IEditFormProps> = ({ location }) => {
  const { user } = location.state;

  const updateUser = useCallback(async (data: IDataForm): Promise<void> => {
    try {
      const { data: responseData } = await api.put(`users/${user.id}`, data);
      console.log(responseData);
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  return (
    <>
      <SideBar />
      <Container>
        <Content>
          <FormElement initialData={user} ref={formRef} onSubmit={updateUser}>
            <h2> Editar Usuário </h2>

            <Input icon={FiUser} name="name" placeholder="Nome Completo" />

            <Input icon={FiMail} name="email" placeholder="E-mail" />

            <Input
              icon={FiHeart}
              name="maritalStatus"
              placeholder="Estado Civil"
            />

            <Input icon={FiGrid} name="cpf" placeholder="CPF" />

            <Input icon={FiMapPin} name="city" placeholder="Cidade" />

            <Input icon={FiMap} name="state" placeholder="Estado" />

            <Button type="submit">Atualizar</Button>
          </FormElement>
        </Content>
      </Container>
    </>
  );
};

export default EditForm;
