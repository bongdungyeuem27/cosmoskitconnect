export declare const RELAYER_DEFAULT_PROTOCOL = "irn";
export declare const RELAYER_DEFAULT_LOGGER = "error";
export declare const RELAYER_DEFAULT_RELAY_URL = "wss://relay.walletconnect.org";
export declare const RELAYER_CONTEXT = "relayer";
export declare const RELAYER_EVENTS: {
    message: string;
    message_ack: string;
    connect: string;
    disconnect: string;
    error: string;
    connection_stalled: string;
    transport_closed: string;
    publish: string;
};
export declare const RELAYER_SUBSCRIBER_SUFFIX = "_subscription";
export declare const RELAYER_PROVIDER_EVENTS: {
    payload: string;
    connect: string;
    disconnect: string;
    error: string;
};
export declare const RELAYER_RECONNECT_TIMEOUT = 0.1;
export declare const RELAYER_STORAGE_OPTIONS: {
    database: string;
};
export declare const RELAYER_SDK_VERSION = "2.17.3";
export declare const RELAYER_TRANSPORT_CUTOFF = 10000;
export declare const TRANSPORT_TYPES: {
    readonly link_mode: "link_mode";
    readonly relay: "relay";
};
//# sourceMappingURL=relayer.d.ts.map