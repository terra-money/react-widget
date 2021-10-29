import { useQuery } from 'react-query';
import { AccAddress } from '@terra-money/terra.js';
import { useLCDClient } from './NetworkProvider';

interface TokenInfo {
  symbol: string;
  decimals: number;
}

const useTokenContractQuery = (address: string) => {
  const lcd = useLCDClient();
  return useQuery(
    ['token', address],
    () =>
      lcd.wasm.contractQuery<TokenInfo>(address, {
        token_info: {},
      }),
    { enabled: AccAddress.validate(address) },
  );
};

export default useTokenContractQuery;
