import { Cacao, CacaoPayload } from "@cosmoskitconnect/cacao";
import { JwtPayload } from "@cosmoskitconnect/did-jwt";
import { ICore, IStore } from "@cosmoskitconnect/types";
import { IIdentityKeys, IdentityKeychain, RegisterIdentityParams, ResolveIdentityParams, UnregisterIdentityParams, GetIdentityParams } from "./types";
export declare const DEFAULT_KEYSERVER_URL = "https://keys.walletconnect.com";
export declare class IdentityKeys implements IIdentityKeys {
    private core;
    private projectId;
    private keyserverUrl;
    identityKeys: IStore<IdentityKeychain["accountId"], IdentityKeychain>;
    constructor(core: ICore, projectId: string, keyServerUrl?: string);
    init: () => Promise<void>;
    generateIdAuth: (accountId: string, payload: JwtPayload) => Promise<string>;
    isRegistered(account: string): boolean;
    prepareRegistrationWithRecaps({ domain, recapObject, }: {
        domain: string;
        recapObject: {
            att: Record<string, Record<string, Record<string, any>[]>>;
        };
    }): Promise<{
        cacaoPayload: Omit<CacaoPayload, "iss"> & {
            uri: string;
        };
        privateIdentityKey: Uint8Array;
    }>;
    prepareRegistration({ domain, accountId, statement, }: {
        domain: string;
        statement?: string;
        accountId: string;
    }): Promise<{
        message: string;
        registerParams: {
            cacaoPayload: {
                aud: string;
                statement: string | undefined;
                domain: string;
                iss: string;
                nonce: string;
                iat: string;
                version: string;
                resources: string[];
            };
            privateIdentityKey: Uint8Array;
        };
    }>;
    registerIdentity({ registerParams, signature, }: RegisterIdentityParams): Promise<string>;
    unregisterIdentity({ account }: UnregisterIdentityParams): Promise<void>;
    resolveIdentity({ publicKey }: ResolveIdentityParams): Promise<Cacao>;
    getIdentity({ account }: GetIdentityParams): Promise<string>;
    hasIdentity({ account }: GetIdentityParams): Promise<boolean>;
    private generateIdentityKey;
    private getKeyHex;
    private getKeyData;
}
//# sourceMappingURL=identity-keys.d.ts.map