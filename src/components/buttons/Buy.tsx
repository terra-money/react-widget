import React, { useState } from 'react';
import ChevronRight from '@mui/icons-material/ChevronRight';
import BuyModal from '../modals/BuyModal';
import styles from './Buy.module.scss';

export type Currency = 'Luna' | 'UST';

export interface Props {
  currency: Currency;
  transakApiKey?: string;
}

const Buy = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currency } = props;
  const title = `Buy ${currency}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={styles.buy}
      >
        {title}
        <ChevronRight />
      </button>

      <BuyModal
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
      />
    </>
  );
};

export default Buy;
