# Dune Token Price

Fetch latest token prices from Dune's prices.latest table.

## Configuration

- **Blockchain**: arbitrum
- **Cache Duration**: 60000ms

## Usage

```tsx
import { useTokenPrice } from '@/hooks/useTokenPrice';

function PriceDisplay() {
  const { data: price, isLoading } = useTokenPrice({
    blockchain: 'arbitrum',
    contractAddress: '0x...'
  });
  
  if (isLoading) return <div>Loading...</div>;
  
  return <TokenPriceCard price={price} />;
}
```
