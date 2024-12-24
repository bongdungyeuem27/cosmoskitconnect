import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore, PendingRequestTypes } from "@cosmoskitconnect/types";
export declare class PendingRequest extends Store<number, PendingRequestTypes.Struct> {
    core: ICore;
    logger: Logger;
    constructor(core: ICore, logger: Logger);
}
//# sourceMappingURL=pendingRequest.d.ts.map