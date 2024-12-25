import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore } from "@cosmoskitconnect/types";
export declare class AuthPairingTopic extends Store<string, {
    topic: string;
    pairingTopic: string;
}> {
    core: ICore;
    logger: Logger;
    constructor(core: ICore, logger: Logger);
}
//# sourceMappingURL=authPairingTopic.d.ts.map