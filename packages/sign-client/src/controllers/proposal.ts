import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore, ProposalTypes } from "@cosmoskitconnect/types";

import { PROPOSAL_CONTEXT, SIGN_CLIENT_STORAGE_PREFIX } from "../constants";

export class Proposal extends Store<number, ProposalTypes.Struct> {
  constructor(public core: ICore, public logger: Logger) {
    super(core, logger, PROPOSAL_CONTEXT, SIGN_CLIENT_STORAGE_PREFIX);
  }
}
