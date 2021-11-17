import React from 'react';

import BasicModal from '../common/BasicModal';
import { Props as BuyProps } from '../buttons/Buy';
import ExchangeItem from './ExchangeItem';
import styles from './BuyModal.module.scss';
import { getFiatResources, exchanges, Resource } from './resources';

interface Props extends BuyProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const BuyModal = (props: Props) => {
  const { currency, transakApiKey, title, isOpen, onClose } = props;
  const withFiatResources = getFiatResources(currency, transakApiKey);

  return (
    <BasicModal onClose={onClose} open={isOpen} title={title}>
      <section className={styles.resources}>
        <p className={styles.subtitle}>Exchanges</p>
        <div className={styles.cardList}>
          {exchanges[currency].map((resource: Resource, i: number) => (
            <ExchangeItem {...resource} key={i} />
          ))}
        </div>
      </section>

      <section className={styles.resources}>
        <p className={styles.subtitle}>With Fiat</p>
        <div className={styles.cardList}>
          {withFiatResources.map((resource: Resource, i: number) => (
            <ExchangeItem {...resource} key={i} />
          ))}
        </div>
      </section>
    </BasicModal>
  );
};

export default BuyModal;
