import React, { useState } from 'react';

import '../../index.scss';
import BasicModal from '../common/BasicModal';
import bitfinex from '../../assets/bitfinex.svg';
import kucoin from '../../assets/kucoin.svg';
import transak from '../../assets/transak.svg';
import s from './BuyUSTModal.module.scss';

interface Resource {
  name: string;
  image: string;
  link: string;
}

const Card = ({ resource }: { resource: Resource }) => {
  return (
    <a className={s.card} href={resource.link} target="_blank" rel="noreferrer">
      <p>{resource.name}</p>
      <img src={resource.image} alt="" />
    </a>
  );
};

// Fixme: avoid hardcoded resource
const exchangeResources: Resource[] = [
  {
    name: 'Bitfinex',
    image: bitfinex,
    link: 'https://trading.bitfinex.com/t/TERRAUST:USD?demo=true',
  },
  {
    name: 'KuCoin',
    image: kucoin,
    link: 'https://trade.kucoin.com/USDT-UST',
  },
];

const withFlatResources: Resource[] = [
  {
    name: 'Transak',
    image: transak,
    link: 'https://global.transak.com/?apiKey=db70aca0-ca84-4344-8dcc-036f470414fc&cryptoCurrencyList=UST,LUNA&defaultCryptoCurrency=UST&networks=terra',
  },
];

const BuyUSTModal = () => {
  const [open, setOpen] = useState(false);
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
          <section className={s.exchange}>
            <p className={s.subtitle}>Exchanges</p>
            <div className={s.cardList}>
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
            <p className={s.subtitle}>With Flat</p>
            <div className={s.cardList}>
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
