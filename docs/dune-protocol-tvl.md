# Dune Protocol TVL

Fetch Total Value Locked for DeFi protocols.

## Configuration

- **Blockchain**: arbitrum

## Usage

```tsx
import { useProtocolTVL } from '@/hooks/useProtocolTVL';

function TVLDisplay() {
  const { data: tvl } = useProtocolTVL({
    protocol: 'uniswap-v3'
  });
  
  return <ProtocolTVLCard data={tvl} />;
}
```
