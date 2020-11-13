/* eslint-disable react/jsx-curly-newline */
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
import { mask, unMask } from 'remask';
import api from '../../services/api';
import { Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SideBar from '../../components/SideBar';
// eslint-disable-next-line import/order
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

interface IDataForm {
  city: string;
  cpf: string;
  email: string;
  maritalStatus: string;
  name: string;
  state: string;
}

const Form: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmitForm = useCallback(async (data: IDataForm) => {
    try {
      // eslint-disable-next-line no-unused-expressions
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),

        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),

        cpf: Yup.string()
          .min(11, 'No mínimo 11 digitos')
          .required('CPF obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      try {
        const { data: responseData } = await api.post('/users', data);
        history.push('/dashboard');
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);

      const errors = getValidationErrors(error);
      // eslint-disable-next-line no-unused-expressions
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <SideBar />
      <Container>
        <Content>
          <FormElement ref={formRef} onSubmit={handleSubmitForm}>
            <h2> Cadastre um Usuário </h2>

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

            <Button type="submit">Cadastrar</Button>
          </FormElement>
        </Content>
      </Container>
    </>
  );
};

export default Form;
