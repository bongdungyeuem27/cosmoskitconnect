import { RelayerTypes } from "@cosmoskitconnect/types";
export declare const RELAYER_DEFAULT_PROTOCOL = "irn";
export declare function getRelayProtocolName(opts?: RelayerTypes.RequestOptions): RelayerTypes.ProtocolOptions;
export declare function getRelayProtocolApi(protocol: string): import("@cosmoskitconnect/relay-api").RelayJsonRpc.Methods;
//# sourceMappingURL=relay.d.ts.map