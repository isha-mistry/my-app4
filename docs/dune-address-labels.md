# Dune Address Labels

Fetch human-readable labels for blockchain addresses.

## Configuration

- **Include ENS**: true
- **Include Owner Info**: true

## Usage

```tsx
import { useAddressLabels } from '@/hooks/useAddressLabels';

function AddressDisplay({ address }) {
  const { data: label } = useAddressLabels(address);
  
  return <AddressLabel label={label} />;
}
```
