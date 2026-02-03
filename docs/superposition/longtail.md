# Longtail AMM Integration

# Longtail AMM Integration

This module provides utilities for interacting with Longtail, Superposition's native DEX.

## Overview

Longtail is a concentrated liquidity AMM built with Arbitrum Stylus. It features:

- **4x cheaper than Uniswap V3** - Built with Stylus for maximum gas efficiency
- **Utility Mining rewards** - Every swap earns yield
- **Super Asset pairs** - All pools paired with yield-bearing tokens

## Features Enabled

- swap
- pool-queries

## Usage

### Swapping Tokens

```typescript
import { useLongtailSwap } from './hooks/useLongtailSwap';

function SwapComponent() {
  const { getQuote, swap, quote } = useLongtailSwap();

  const handleSwap = async () => {
    const quote = await getQuote(tokenIn, tokenOut, amount);
    if (quote) {
      await swap(tokenIn, tokenOut, amount);
    }
  };
}
```


### Querying Pools

```typescript
import { useLongtailPool } from './hooks/useLongtailPool';

function PoolInfo() {
  const { pool, isLoading } = useLongtailPool(token0, token1, 3000);

  if (isLoading) return <p>Loading...</p>;
  if (!pool) return <p>Pool not found</p>;

  return <p>TVL: ${pool.tvlUsd}</p>;
}
```




## Resources

- [Longtail App](https://long.so)
- [Superposition Docs](https://docs.superposition.so)