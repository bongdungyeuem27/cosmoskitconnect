import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { AuthTypes, ICore } from "@cosmoskitconnect/types";

import { AUTH_REQUEST_CONTEXT, AUTH_STORAGE_PREFIX } from "../constants";

export class AuthRequest extends Store<number, AuthTypes.PendingRequest> {
  constructor(public core: ICore, public logger: Logger) {
    super(
      core,
      logger,
      AUTH_REQUEST_CONTEXT,
      AUTH_STORAGE_PREFIX,
      (val: AuthTypes.PendingRequest) => val.id,
    );
  }
}
