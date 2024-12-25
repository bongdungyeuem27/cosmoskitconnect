import { IEvents } from "@cosmoskitconnect/events";
import { IJsonRpcProvider, JsonRpcPayload, RequestArguments } from "@cosmoskitconnect/jsonrpc-types";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore } from "./core";
import { IMessageTracker } from "./messages";
import { IPublisher } from "./publisher";
import { ISubscriber } from "./subscriber";
export declare namespace RelayerTypes {
    interface ProtocolOptions {
        protocol: string;
        data?: string;
    }
    interface PublishOptions {
        relay?: ProtocolOptions;
        ttl?: number;
        prompt?: boolean;
        tag?: number;
        id?: number;
        internal?: {
            throwOnFailedPublish?: boolean;
        };
        attestation?: string;
    }
    type TransportType = "relay" | "link_mode";
    interface SubscribeOptions {
        relay?: ProtocolOptions;
        transportType?: TransportType;
        internal?: {
            throwOnFailedPublish?: boolean;
        };
    }
    interface UnsubscribeOptions {
        id?: string;
        relay: ProtocolOptions;
    }
    type RequestOptions = PublishOptions | SubscribeOptions | UnsubscribeOptions;
    interface PublishPayload {
        topic: string;
        message: string;
        opts?: RelayerTypes.PublishOptions;
    }
    interface MessageEvent {
        topic: string;
        message: string;
        publishedAt: number;
        transportType?: TransportType;
        attestation?: string;
    }
    interface RpcUrlParams {
        protocol: string;
        version: number;
        auth: string;
        relayUrl: string;
        sdkVersion: string;
        projectId?: string;
        useOnCloseEvent?: boolean;
        bundleId?: string;
        packageName?: string;
    }
}
export interface RelayerOptions {
    core: ICore;
    logger?: string | Logger;
    relayUrl?: string;
    projectId?: string;
}
export interface RelayerClientMetadata {
    protocol: string;
    version: number;
    env: string;
    host?: string;
}
export declare abstract class IRelayer extends IEvents {
    abstract protocol: string;
    abstract version: number;
    abstract core: ICore;
    abstract logger: Logger;
    abstract subscriber: ISubscriber;
    abstract publisher: IPublisher;
    abstract messages: IMessageTracker;
    abstract provider: IJsonRpcProvider;
    abstract name: string;
    abstract transportExplicitlyClosed: boolean;
    abstract readonly context: string;
    abstract readonly connected: boolean;
    abstract readonly connecting: boolean;
    constructor(opts: RelayerOptions);
    abstract init(): Promise<void>;
    abstract publish(topic: string, message: string, opts?: RelayerTypes.PublishOptions): Promise<void>;
    abstract request(request: RequestArguments): Promise<JsonRpcPayload>;
    abstract subscribe(topic: string, opts?: RelayerTypes.SubscribeOptions): Promise<string>;
    abstract unsubscribe(topic: string, opts?: RelayerTypes.UnsubscribeOptions): Promise<void>;
    abstract transportClose(): Promise<void>;
    abstract transportOpen(relayUrl?: string): Promise<void>;
    abstract restartTransport(relayUrl?: string): Promise<void>;
    abstract confirmOnlineStateOrThrow(): Promise<void>;
    abstract handleBatchMessageEvents(messages: RelayerTypes.MessageEvent[]): Promise<void>;
    abstract onLinkMessageEvent(messageEvent: RelayerTypes.MessageEvent, opts?: {
        sessionExists?: boolean;
    }): Promise<void>;
}
//# sourceMappingURL=relayer.d.ts.map