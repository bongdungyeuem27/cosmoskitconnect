import { Store } from "@cosmoskitconnect/core";
import { Logger } from "@cosmoskitconnect/logger";
import { ICore } from "@cosmoskitconnect/types";

import { AUTH_KEYS_CONTEXT, AUTH_PUBLIC_KEY_NAME, AUTH_STORAGE_PREFIX } from "../constants";

export class AuthKey extends Store<string, { responseTopic: string; publicKey: string }> {
  constructor(public core: ICore, public logger: Logger) {
    super(core, logger, AUTH_KEYS_CONTEXT, AUTH_STORAGE_PREFIX, () => AUTH_PUBLIC_KEY_NAME);
  }
}
