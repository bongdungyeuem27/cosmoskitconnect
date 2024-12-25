import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore } from "@cosmoskitconnect/types";
export declare class AuthKey extends Store<string, {
    responseTopic: string;
    publicKey: string;
}> {
    core: ICore;
    logger: Logger;
    constructor(core: ICore, logger: Logger);
}
//# sourceMappingURL=authKey.d.ts.map