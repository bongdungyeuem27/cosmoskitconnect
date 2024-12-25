import { RegisterPayload, GetMessagesPayload, GetMessagesResponse } from "./types";
import type { ICore } from "@cosmoskitconnect/types";
export declare const DEFAULT_HISTORY_URL = "https://history.walletconnect.com";
export declare const DAY_IN_MS: number;
export declare class HistoricalMessages {
    private core;
    messageResponse: GetMessagesResponse;
    constructor(core: ICore, messageResponse: GetMessagesResponse);
    injectIntoRelayer(): Promise<void>;
}
export declare class HistoryClient {
    private core;
    private readonly historyUrl;
    private jwt;
    constructor(core: ICore, historyUrl?: string);
    registerTags(payload: RegisterPayload, historyUrl?: string): Promise<void>;
    getMessages(payload: GetMessagesPayload, historyUrl?: string): Promise<HistoricalMessages>;
    getJwt(): Promise<string>;
}
//# sourceMappingURL=utils.d.ts.map