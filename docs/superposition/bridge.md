# Superposition Bridge

# Superposition Bridge Integration

This module provides utilities for bridging assets to and from Superposition L3.

## Overview

The bridge uses Li.Fi SDK to find optimal routes for cross-chain transfers.

### Supported Source Chains
- Arbitrum

### Supported Tokens
- ETH
- USDC

## Usage

### Deposit (Bridge to Superposition)

```typescript
import { useSuperpositionBridge } from './hooks/useSuperpositionBridge';

function BridgeComponent() {
  const { getQuote, bridge, quote, status } = useSuperpositionBridge();

  const handleBridge = async () => {
    // Get a quote first
    const quote = await getQuote('arbitrum', 'ETH', BigInt(1e18));
    
    // Execute the bridge
    if (quote) {
      const txHash = await bridge('arbitrum', 'ETH', BigInt(1e18));
      console.log('Bridge tx:', txHash);
    }
  };

  return <button onClick={handleBridge}>Bridge 1 ETH</button>;
}
```


### Withdraw (Bridge from Superposition)

```typescript
import { useSuperpositionWithdraw } from './hooks/useSuperpositionWithdraw';

function WithdrawComponent() {
  const { withdraw, status } = useSuperpositionWithdraw();

  const handleWithdraw = async () => {
    const txHash = await withdraw('arbitrum', 'ETH', BigInt(1e18));
    console.log('Withdraw tx:', txHash);
  };

  return <button onClick={handleWithdraw}>Withdraw 1 ETH</button>;
}
```


## Configuration

- **Slippage Tolerance**: 0.5%
- **Bridge Provider**: lifi

## Resources

- [Li.Fi Documentation](https://docs.li.fi)
- [Superposition Bridge](https://bridge.superposition.so)