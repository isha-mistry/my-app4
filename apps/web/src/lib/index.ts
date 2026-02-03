/**
 * @cradle/onchain-activity
 *
 * Onchain Activity Integration
 * Fetch wallet transactions and activities from Arbitrum by category
 *
 * @example
 * ```tsx
 * import { useOnchainActivity, CATEGORY_LABELS } from '@cradle/onchain-activity';
 *
 * function WalletActivity() {
 *   const { data, loading, error, fetchActivity } = useOnchainActivity({
 *     network: 'arbitrum',
 *     limit: '10',
 *     categories: ['erc20', 'erc721'],
 *     apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY!,
 *   });
 *
 *   return (
 *     <div>
 *       <button onClick={() => fetchActivity('0x...')}>
 *         Fetch Activity
 *       </button>
 *       {loading && <p>Loading...</p>}
 *       {error && <p>Error: {error.message}</p>}
 *       {data?.transfers.map((tx) => (
 *         <div key={tx.hash}>
 *           {tx.category}: {tx.value} {tx.asset}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */

// Constants
export {
    CHAIN_IDS,
    CONTRACTS,
    TRADING_ABI,
    ERC20_ABI,
    USDC_DECIMALS,
    DEFAULT_APPROVAL_AMOUNT,
    MAX_UINT256,
    type SupportedNetwork,
} from './constants';
export type {
    DelegationStatus,
    ApprovalStatus,
    OneClickTradingStatus,
    TransactionResult,
    OstiumConfig,
    AsyncState,
    TransactionState,
} from './types';
export {
    checkDelegation,
    enableDelegation,
    removeDelegation,
} from './delegation';
export {
    checkAllowance,
    getUsdcBalance,
    approveUsdc,
    revokeUsdcApproval,
} from './approval';
export {
    useDelegation,
    useUsdcApproval,
    type UseDelegationOptions,
    type UseDelegationReturn,
    type UseUsdcApprovalOptions,
    type UseUsdcApprovalReturn,
} from './hooks';
export {
  generateOstiumAgent,
  generateTelegramLink,
  checkTelegramStatus,
  createLazyTraderAgent,
  checkSetup,
} from './api';
