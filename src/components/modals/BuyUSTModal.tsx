import React, { useState } from 'react';

import '../../index.scss';
import BasicModal from '../common/BasicModal';
import bitfinex from '../../assets/bitfinex.svg';
import kucoin from '../../assets/kucoin.svg';
import transak from '../../assets/transak.svg';
import styles from './BuyUSTModal.module.scss';

interface Resource {
  name: string;
  image: string;
  link: string;
}

const Card = ({ resource }: { resource: Resource }) => {
  return (
    <a
      className={styles.card}
      href={resource.link}
      target="_blank"
      rel="noreferrer"
    >
      <p>{resource.name}</p>
      <img src={resource.image} alt="" />
    </a>
  );
};

const exchangeResources: Resource[] = [
  {
    name: 'Bitfinex',
    image: bitfinex,
    link: 'https://trading.bitfinex.com/t/TERRAUST:USD',
  },
  {
    name: 'KuCoin',
    image: kucoin,
    link: 'https://trade.kucoin.com/USDT-UST',
  },
];

const getFlatResources = (transakApiKey?: string): Resource[] => {
  return [
    {
      name: 'Transak',
      image: transak,
      link: `https://global.transak.com/?cryptoCurrencyList=UST,LUNA&defaultCryptoCurrency=UST&networks=terra${
        transakApiKey ? `&apiKey=${transakApiKey}` : ''
      }`,
    },
  ];
};

interface Props {
  transakApiKey?: string;
}

const BuyUSTModal = ({ transakApiKey }: Props) => {
  const [open, setOpen] = useState(false);

  const withFlatResources = getFlatResources(transakApiKey);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Buy UST
      </button>
      <BasicModal onClose={() => setOpen(false)} open={open} title="Buy UST">
        <>
          <section className={styles.exchange}>
            <p className={styles.subtitle}>Exchanges</p>
            <div className={styles.cardList}>
              {exchangeResources.map((resource: Resource, i: number) => {
                return (
                  <Card
                    key={`exchange-resource-${i.toString()}`}
                    resource={resource}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <p className={styles.subtitle}>With Flat</p>
            <div className={styles.cardList}>
              {withFlatResources.map((resource: Resource, i: number) => {
                return (
                  <Card
                    key={`flat-resource-${i.toString()}`}
                    resource={resource}
                  />
                );
              })}
            </div>
          </section>
        </>
      </BasicModal>
    </>
  );
};

export { BuyUSTModal };
