import { CacaoPayload, CacaoSignature } from "./types";
export declare const DEFAULT_RPC_URL = "https://rpc.walletconnect.com/v1";
export declare const getDidAddressSegments: (iss: string) => string[];
export declare const getDidChainId: (iss: string) => string | undefined;
export declare const getNamespacedDidChainId: (iss: string) => string | undefined;
export declare const getDidAddress: (iss: string) => string | undefined;
export declare const formatMessage: (cacao: CacaoPayload, iss: string) => string;
export declare function verifySignature(address: string, reconstructedMessage: string, cacaoSignature: CacaoSignature, chainId: string, projectId: string): Promise<boolean>;
//# sourceMappingURL=utils.d.ts.map