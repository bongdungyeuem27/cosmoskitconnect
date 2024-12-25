import { IEvents } from "@cosmoskitconnect/events";
import { IHeartBeat } from "@cosmoskitconnect/heartbeat";
import { IKeyValueStorage, KeyValueStorageOptions } from "@cosmoskitconnect/keyvaluestorage";

import { Logger } from "@cosmoskitconnect/logger";
import { ICrypto } from "./crypto";
import { IEchoClient } from "./echo";
import { IEventClient } from "./events";
import { IExpirer } from "./expirer";
import { IJsonRpcHistory } from "./history";
import { IKeyChain } from "./keychain";
import { IPairing } from "./pairing";
import { IRelayer } from "./relayer";
import { IVerify } from "./verify";
export declare namespace CoreTypes {
  interface Options {
    projectId?: string;
    name?: string;
    relayUrl?: string;
    logger?: string | Logger;
    keychain?: IKeyChain;
    storage?: IKeyValueStorage;
    storageOptions?: KeyValueStorageOptions;
    maxLogBlobSizeInBytes?: number;
    customStoragePrefix?: string;
    telemetryEnabled?: boolean;
  }

  interface Metadata {
    name: string;
    description: string;
    url: string;
    icons: string[];
    verifyUrl?: string;
    redirect?: {
      native?: string;
      universal?: string;
      linkMode?: boolean;
    };
  }
}

export abstract class ICore extends IEvents {
  public readonly protocol = "wc";
  public readonly version = 2;

  public abstract readonly name: string;
  public abstract readonly context: string;
  public abstract readonly relayUrl?: string;
  public abstract readonly projectId?: string;
  public abstract readonly customStoragePrefix: string;

  public abstract logger: Logger;
  public abstract heartbeat: IHeartBeat;
  public abstract crypto: ICrypto;
  public abstract relayer: IRelayer;
  public abstract storage: IKeyValueStorage;
  public abstract history: IJsonRpcHistory;
  public abstract expirer: IExpirer;
  public abstract pairing: IPairing;
  public abstract verify: IVerify;
  public abstract echoClient: IEchoClient;
  public abstract linkModeSupportedApps: string[];
  public abstract eventClient: IEventClient;

  constructor(public opts?: CoreTypes.Options) {
    super();
  }

  public abstract start(): Promise<void>;
  public abstract dispatchEnvelope(params: {
    topic: string;
    message: string;
    sessionExists: boolean;
  }): void;

  public abstract addLinkModeSupportedApp(universalLink: string): void;
}
