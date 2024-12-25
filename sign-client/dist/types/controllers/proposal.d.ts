import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore, ProposalTypes } from "@cosmoskitconnect/types";
export declare class Proposal extends Store<number, ProposalTypes.Struct> {
    core: ICore;
    logger: Logger;
    constructor(core: ICore, logger: Logger);
}
//# sourceMappingURL=proposal.d.ts.map