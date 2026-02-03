# Superposition Network Integration

# Superposition Network Integration

This module provides configuration and utilities for integrating with the Superposition L3 blockchain.

## Overview

Superposition is an Arbitrum Layer 3 blockchain designed for incentive-driven applications. It features:

- **Super Assets**: Yield-bearing wrapped tokens that pay rewards for holding AND using them
- **Longtail AMM**: Native DEX with concentrated liquidity and utility mining rewards
- **Utility Mining**: Activity-based token distribution mechanism

## Network Details

### Mainnet
- **Chain ID**: 55244
- **RPC URL**: https://rpc.superposition.so
- **Explorer**: https://explorer.superposition.so
- **Bridge**: https://bridge.superposition.so
- **DEX (Longtail)**: https://long.so


### Testnet
- **Chain ID**: 98985
- **RPC URL**: https://testnet-rpc.superposition.so
- **Explorer**: https://testnet-explorer.superposition.so
- **Faucet**: https://faucet.superposition.so


## Usage

### Chain Configuration

```typescript
import { superpositionMainnet } from './lib/chains';
import { createConfig } from 'wagmi';

const config = createConfig({
  chains: [superpositionMainnet],
  // ... other config
});
```

### Network Switching

```typescript
import { useSuperpositionNetwork } from './hooks/useSuperpositionNetwork';

function MyComponent() {
  const { isOnSuperposition, switchToSuperposition } = useSuperpositionNetwork();

  if (!isOnSuperposition) {
    return <button onClick={() => switchToSuperposition()}>Connect to Superposition</button>;
  }

  return <div>Connected to Superposition!</div>;
}
```

## Resources

- [Superposition Documentation](https://docs.superposition.so)
- [Superposition Website](https://superposition.so)
- [Whitepaper](https://whitepapers.fluidity.money/spn-whitepaper-0.1.pdf)