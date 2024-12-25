import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore, SessionTypes } from "@cosmoskitconnect/types";

import { SESSION_CONTEXT, SIGN_CLIENT_STORAGE_PREFIX } from "../constants";

export class Session extends Store<string, SessionTypes.Struct> {
  constructor(public core: ICore, public logger: Logger) {
    super(core, logger, SESSION_CONTEXT, SIGN_CLIENT_STORAGE_PREFIX);
  }
}
