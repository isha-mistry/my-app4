
      import { type Chain } from 'viem';
import { mainnet, sepolia, arbitrum, arbitrumSepolia } from 'viem/chains';

      // Superposition Mainnet chain configuration
      export const superposition: Chain = {
        id: 55244,
        name: 'Superposition',
        nativeCurrency: {
          name: 'ETH',
          symbol: 'ETH',
          decimals: 18,
        },
        rpcUrls: {
          default: {
            http: [process.env.NEXT_PUBLIC_SUPERPOSITION_RPC_URL || 'https://rpc.superposition.so'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Superposition Explorer',
            url: 'https://explorer.superposition.so',
          },
        },
      };

      // Superposition Testnet chain configuration
      export const superpositionTestnet: Chain = {
        id: 98985,
        name: 'Superposition Testnet',
        nativeCurrency: {
          name: 'SPN',
          symbol: 'SPN',
          decimals: 18,
        },
        rpcUrls: {
          default: {
            http: ['https://testnet-rpc.superposition.so'],
          },
        },
        blockExplorers: {
          default: {
            name: 'Superposition Testnet Explorer',
            url: 'https://testnet-explorer.superposition.so',
          },
        },
        testnet: true,
      };

      // Default supported chains
      export const chains = [superposition, superpositionTestnet, arbitrum, arbitrumSepolia, mainnet, sepolia] as const;
    