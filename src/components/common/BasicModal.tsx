import React from 'react';

import { Dialog, IconButton } from '@mui/material';
import s from './BasicModal.module.scss';
import closeIcon from '../../assets/icon-close.svg';

interface Props {
  onClose: () => void;
  open: boolean;
  children: React.ReactElement;
  title?: string;
}

const BasicModal = ({ onClose, open, children, title }: Props) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      BackdropProps={{
        style: {
          backgroundColor: '#000',
          opacity: 0.8,
        },
      }}
      PaperProps={{
        style: {
          minWidth: '520px',
          minHeight: '409px',
          borderRadius: '8px',
        },
      }}
    >
      <div className={s.wrapper}>
        <IconButton
          className={s.close}
          onClick={onClose}
          // style={{ position: 'absolute' }}
        >
          <img src={closeIcon} alt="close" />
        </IconButton>
        <p className={s.title}>{title}</p>
        {children}
      </div>
    </Dialog>
  );
};

export default BasicModal;
