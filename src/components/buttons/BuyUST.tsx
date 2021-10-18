import ChevronRight from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import { BuyUSTModal } from '../modals/BuyUSTModal';
import styles from './BuyUST.module.scss';

interface Props {
  transakApiKey?: string;
}

const BuyUST = ({ transakApiKey }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
        className={styles.buy}
      >
        BUY UST
        <ChevronRight />
      </button>
      <BuyUSTModal
        transakApiKey={transakApiKey}
        onClose={() => setOpen(false)}
        open={open}
        title="Buy UST"
      />
    </>
  );
};

export { BuyUST };
