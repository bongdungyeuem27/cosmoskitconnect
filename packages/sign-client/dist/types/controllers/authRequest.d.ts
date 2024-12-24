import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { AuthTypes, ICore } from "@cosmoskitconnect/types";
export declare class AuthRequest extends Store<number, AuthTypes.PendingRequest> {
    core: ICore;
    logger: Logger;
    constructor(core: ICore, logger: Logger);
}
//# sourceMappingURL=authRequest.d.ts.map