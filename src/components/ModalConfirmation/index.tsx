/* eslint-disable react/button-has-type */
import React from 'react';
import { Container, Content } from './styles';

export interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  textConfirm: string;
  visible: boolean;
  title: string;
  closeModal(): void;
  confirm(): void;
}

export function ModalConfirmation({
  visible,
  title,
  confirm,
  closeModal,
  textConfirm,
}: ModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <Container>
      <Content>
        <h2>{title}</h2>

        <p>{textConfirm}</p>
        <footer className="footer">
          <button className="confirm" onClick={confirm}>
            Confirmar
          </button>
          <button className="close" onClick={closeModal}>
            Cancelar
          </button>
        </footer>
      </Content>
    </Container>
  );
}
