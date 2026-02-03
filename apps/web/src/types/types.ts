/**
 * Ostium One-Click Trading Types
 */

import type { Address, Hash } from 'viem';
import type { SupportedNetwork } from './constants';

/**
 * Status of a delegation
 */
export interface DelegationStatus {
    isDelegated: boolean;
    delegateAddress: Address | null;
}

/**
 * Status of USDC approval
 */
export interface ApprovalStatus {
    hasApproval: boolean;
    currentAllowance: bigint;
    formattedAllowance: string;
}

/**
 * Combined status for one-click trading setup
 */
export interface OneClickTradingStatus {
    delegation: DelegationStatus;
    approval: ApprovalStatus;
    isReady: boolean;
}

/**
 * Transaction result
 */
export interface TransactionResult {
    hash: Hash;
    success: boolean;
}

/**
 * Configuration for Ostium one-click trading
 */
export interface OstiumConfig {
    network: SupportedNetwork;
    delegateAddress?: Address;
    approvalAmount?: bigint;
}

/**
 * Hook state for async operations
 */
export type AsyncState<T> =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: Error };

/**
 * Transaction state
 */
export type TransactionState =
    | { status: 'idle' }
    | { status: 'pending' }
    | { status: 'confirming'; hash: Hash }
    | { status: 'success'; hash: Hash }
    | { status: 'error'; error: Error };

// Additional types from merged plugins
/**
 * Maxxit Lazy Trader API Types
 * 4-step wallet-based setup flow
 */

/**
 * Trading preferences for the lazy trader agent
 */
export interface TradingPreferences {
  risk_tolerance: number;
  trade_frequency: number;
  social_sentiment_weight: number;
  price_momentum_focus: number;
  market_rank_priority: number;
}

/**
 * Step 1: Generate Ostium Agent
 */
export interface GenerateAgentResponse {
  agentAddress: string;
  isNew: boolean;
  error?: string;
}

/**
 * Step 2: Generate Telegram Link
 */
export interface GenerateTelegramLinkResponse {
  success: boolean;
  alreadyLinked: boolean;
  linkCode?: string;
  botUsername?: string;
  deepLink?: string;
  expiresIn?: number;
  telegramUser?: TelegramUser;
  error?: string;
}

/**
 * Telegram user info
 */
export interface TelegramUser {
  id: string;
  telegram_user_id: string;
  telegram_username: string;
}

/**
 * Step 3: Check Telegram Status
 */
export interface CheckTelegramStatusResponse {
  success: boolean;
  connected: boolean;
  telegramUser?: TelegramUser;
  error?: string;
}

/**
 * Step 4: Create Agent
 */
export interface CreateAgentResponse {
  success: boolean;
  agent?: {
    id: string;
    name: string;
    venue: string;
  };
  deployment?: {
    id: string;
    status: string;
    isTestnet: boolean;
  };
  ostiumAgentAddress?: string;
  error?: string;
}

/**
 * Check Setup Status - for returning users
 */
export interface CheckSetupResponse {
  success: boolean;
  isSetupComplete: boolean;
  agent?: {
    id: string;
    name: string;
    venue: string;
  };
  deployment?: {
    id: string;
    status: string;
    isTestnet: boolean;
  };
  telegramUser?: TelegramUser;
  ostiumAgentAddress?: string;
  tradingPreferences?: TradingPreferences;
  error?: string;
}

/**
 * Options for API calls
 */
export interface LazyTraderApiOptions {
  /**
   * Base URL for the API
   * @default '/api/lazy-trading'
   */
  baseUrl?: string;
}

/**
 * Setup step status
 */
export type SetupStep = 'idle' | 'agent' | 'telegram-link' | 'telegram-connect' | 'create-agent' | 'complete';

/**
 * State for async operations
 */

// Additional types from merged plugins
/**
 * Supported networks for Onchain Activity
 */
export type SupportedNetwork = 'arbitrum' | 'arbitrum-sepolia';

/**
 * Transaction category types
 */
export type TransactionCategory = 'erc20' | 'erc721' | 'erc1155' | 'external';

/**
 * Transaction limit options
 */
export type TransactionLimit = '5' | '10' | '15' | '20' | 'custom';

/**
 * Token metadata from Alchemy
 */
export interface TokenMetadata {
    name: string | null;
    symbol: string | null;
    decimals: number | null;
    logo: string | null;
}

/**
 * Asset transfer from Alchemy getAssetTransfers
 */
export interface AssetTransfer {
    blockNum: string;
    hash: string;
    from: string;
    to: string | null;
    value: number | null;
    erc721TokenId: string | null;
    erc1155Metadata: Array<{ tokenId: string; value: string }> | null;
    asset: string | null;
    category: TransactionCategory;
    rawContract: {
        value: string | null;
        address: string | null;
        decimal: string | null;
    };
    metadata: {
        blockTimestamp: string;
    };
}

/**
 * Response from Alchemy getAssetTransfers
 */
export interface AssetTransfersResponse {
    transfers: AssetTransfer[];
    pageKey?: string;
}

/**
 * Options for fetching onchain activity
 */
export interface OnchainActivityOptions {
    /** Wallet address to fetch activity for */
    address: string;
    /** Network to fetch from */
    network: SupportedNetwork;
    /** Number of transactions to fetch (can be preset value or custom number) */
    limit: number;
    /** Transaction categories to include */
    categories: TransactionCategory[];
    /** Alchemy API key */
    apiKey: string;
}

/**
 * Onchain activity result
 */
export interface OnchainActivityResult {
    address: string;
    network: SupportedNetwork;
    transfers: AssetTransfer[];
    totalCount: number;
    fetchedAt: string;
}

/**
 * Async state for React hooks
 */

/**
 * Config for the Onchain Activity node
 */
export interface OnchainActivityConfig {
    label?: string;
    description?: string;
    network: SupportedNetwork;
    transactionLimit: TransactionLimit;
    customLimit?: number;
    categories: TransactionCategory[];
}

// Additional types from merged plugins
/**
 * Supported networks for Onchain Activity
 */

/**
 * Asset transfer from Alchemy getAssetTransfers
 */
    asset: string | null;
    category: TransactionCategory;
    rawContract: {
        value: string | null;
        address: string | null;
        decimal: string | null;
    };
    metadata: {
        blockTimestamp: string;
    };
}

/**
 * Response from Alchemy getAssetTransfers
 */

/**
 * Options for fetching onchain activity
 */

/**
 * Onchain activity result
 */

/**
 * Async state for React hooks
 */

/**
 * Config for the Onchain Activity node
 */
