import { ModalBody, ModalContainer, ModalContent, ModalHeader } from './styles';
import { IModalProps } from './types';

import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

const Modal = ({ heading, content, animate, animationType, onSubmit, childModalVisibility }: IModalProps) => {
  return (
    <>
      <ModalContainer onClick={() => onSubmit('close')}>
        <ModalBody
          animationType={animate ? 'fadeIn' : animationType ? animationType : ''}
          childModalVisibility={childModalVisibility}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <h2>{heading}</h2>
            <IconButton onClick={() => onSubmit('close')}>
              <CloseOutlined />
            </IconButton>
          </ModalHeader>
          <ModalContent>{content}</ModalContent>
        </ModalBody>
      </ModalContainer>
    </>
  );
};

export default Modal;
