import React from 'react';
import OpenInNew from '@mui/icons-material/OpenInNew';
import { Resource } from './resources';
import styles from './BuyModal.module.scss';

const ExchangeItem = ({ link, name, image }: Resource) => (
  <a className={styles.item} href={link} target="_blank" rel="noreferrer">
    <p className={styles.name}>
      {name}
      <OpenInNew style={{ fontSize: 12 }} className={styles.icon} />
    </p>

    <img src={image} alt="" style={{ width: 28 }} />
  </a>
);

export default ExchangeItem;
