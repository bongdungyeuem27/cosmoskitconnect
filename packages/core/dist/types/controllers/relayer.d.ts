/// <reference types="node" />
import { IJsonRpcProvider, RequestArguments } from "@cosmoskitconnect/jsonrpc-utils";
import { Logger } from "@cosmoskitconnect/logger";
import { RelayJsonRpc } from "@cosmoskitconnect/relay-api";
import { ICore, IMessageTracker, IPublisher, IRelayer, ISubscriber, RelayerOptions, RelayerTypes } from "@cosmoskitconnect/types";
import { EventEmitter } from "events";
export declare class Relayer extends IRelayer {
    protocol: string;
    version: number;
    core: ICore;
    logger: Logger;
    events: EventEmitter;
    provider: IJsonRpcProvider;
    messages: IMessageTracker;
    subscriber: ISubscriber;
    publisher: IPublisher;
    name: string;
    transportExplicitlyClosed: boolean;
    private initialized;
    private connectionAttemptInProgress;
    private relayUrl;
    private projectId;
    private packageName;
    private bundleId;
    private hasExperiencedNetworkDisruption;
    private pingTimeout;
    private heartBeatTimeout;
    private reconnectTimeout;
    private connectPromise;
    private requestsInFlight;
    private connectTimeout;
    constructor(opts: RelayerOptions);
    init(): Promise<void>;
    get context(): string;
    get connected(): boolean;
    get connecting(): boolean;
    publish(topic: string, message: string, opts?: RelayerTypes.PublishOptions): Promise<void>;
    subscribe(topic: string, opts?: RelayerTypes.SubscribeOptions): Promise<string>;
    request: (request: RequestArguments<RelayJsonRpc.SubscribeParams>) => Promise<any>;
    unsubscribe(topic: string, opts?: RelayerTypes.UnsubscribeOptions): Promise<void>;
    on(event: string, listener: any): void;
    once(event: string, listener: any): void;
    off(event: string, listener: any): void;
    removeListener(event: string, listener: any): void;
    transportDisconnect(): Promise<void>;
    transportClose(): Promise<void>;
    transportOpen(relayUrl?: string): Promise<void>;
    restartTransport(relayUrl?: string): Promise<void>;
    confirmOnlineStateOrThrow(): Promise<void>;
    handleBatchMessageEvents(messages: RelayerTypes.MessageEvent[]): Promise<void>;
    onLinkMessageEvent(messageEvent: RelayerTypes.MessageEvent, opts: {
        sessionExists: boolean;
    }): Promise<void>;
    private connect;
    private startPingTimeout;
    private resetPingTimeout;
    private createProvider;
    private recordMessageEvent;
    private shouldIgnoreMessageEvent;
    private onProviderPayload;
    private onMessageEvent;
    private acknowledgePayload;
    private onPayloadHandler;
    private onConnectHandler;
    private onDisconnectHandler;
    private onProviderErrorHandler;
    private registerProviderListeners;
    private unregisterProviderListeners;
    private registerEventListeners;
    private onProviderDisconnect;
    private isInitialized;
    private toEstablishConnection;
}
//# sourceMappingURL=relayer.d.ts.map