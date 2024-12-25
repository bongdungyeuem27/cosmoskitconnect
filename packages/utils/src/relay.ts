import { RELAY_JSONRPC } from "@cosmoskitconnect/relay-api";
import { RelayerTypes } from "@cosmoskitconnect/types";

export const RELAYER_DEFAULT_PROTOCOL = "irn";

export function getRelayProtocolName(
  opts?: RelayerTypes.RequestOptions,
): RelayerTypes.ProtocolOptions {
  return opts?.relay || { protocol: RELAYER_DEFAULT_PROTOCOL };
}

export function getRelayProtocolApi(protocol: string) {
  const jsonrpc = RELAY_JSONRPC[protocol];
  if (typeof jsonrpc === "undefined") {
    throw new Error(`Relay Protocol not supported: ${protocol}`);
  }
  return jsonrpc;
}
