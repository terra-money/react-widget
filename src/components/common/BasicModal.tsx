import React, { FC } from 'react';

import { Dialog, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import styles from './BasicModal.module.scss';

interface Props {
  onClose: () => void;
  open: boolean;
  title?: string;
}

const BasicModal: FC<Props> = ({ onClose, open, children, title }) => {
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
          maxWidth: '520px',
          margin: '10px',
          width: '100%',
          borderRadius: '8px',
        },
      }}
    >
      <div className={styles.wrapper}>
        <IconButton className={styles.close} onClick={onClose}>
          <Close />
        </IconButton>
        <p className={styles.title}>{title}</p>
        {children}
      </div>
    </Dialog>
  );
};

export default BasicModal;
