import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore, SessionTypes } from "@cosmoskitconnect/types";
export declare class Session extends Store<string, SessionTypes.Struct> {
    core: ICore;
    logger: Logger;
    constructor(core: ICore, logger: Logger);
}
//# sourceMappingURL=session.d.ts.map