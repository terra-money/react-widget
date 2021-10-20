import qs from 'qs';

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

const getFiatResources = (transakApiKey?: string): Resource[] => {
  const link = `https://global.transak.com/?${qs.stringify(
    {
      apiKey: transakApiKey || null,
      cryptoCurrencyList: 'UST,LUNA',
      defaultCryptoCurrency: 'UST',
      networks: 'terra',
    },
    {
      skipNulls: true,
      encode: false,
    },
  )}`;

  return [
    {
      name: 'Transak',
      image: transak,
      link,
    },
  ];
};

interface Props {
  transakApiKey?: string;
  onClose: () => void;
  open: boolean;
  title?: string;
}

const BuyUSTModal = ({ transakApiKey, onClose, open, title }: Props) => {
  const withFiatResources = getFiatResources(transakApiKey);
  return (
    <BasicModal onClose={onClose} open={open} title={title}>
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
        <p className={styles.subtitle}>With Fiat</p>
        <div className={styles.cardList}>
          {withFiatResources.map((resource: Resource, i: number) => {
            return (
              <Card key={`fiat-resource-${i.toString()}`} resource={resource} />
            );
          })}
        </div>
      </section>
    </BasicModal>
  );
};

export { BuyUSTModal };
