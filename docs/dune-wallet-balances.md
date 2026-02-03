# Dune Wallet Balances

Fetch wallet token balances with USD values.

## Configuration

- **Blockchain**: arbitrum
- **Min Balance USD**: $1
- **Include NFTs**: false

## Usage

```tsx
import { useWalletBalances } from '@/hooks/useWalletBalances';

function Portfolio() {
  const { data: balances, isLoading } = useWalletBalances({
    address: '0x...'
  });
  
  return <WalletBalances balances={balances} />;
}
```
