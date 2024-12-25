import { CacaoPayload, Cacao, CacaoSignature } from "@cosmoskitconnect/cacao";
import { JwtPayload } from "@cosmoskitconnect/did-jwt";
export interface RegisterIdentityParams {
    registerParams: {
        cacaoPayload: CacaoPayload;
        privateIdentityKey: Uint8Array;
    };
    signature: CacaoSignature;
}
export interface ResolveIdentityParams {
    publicKey: string;
}
export interface UnregisterIdentityParams {
    account: string;
}
export interface GetIdentityParams {
    account: string;
}
export interface IdentityKeychain {
    accountId: string;
    identityKeyPub: string;
    identityKeyPriv: string;
}
export declare abstract class IIdentityKeys {
    abstract init(): Promise<void>;
    abstract registerIdentity(params: RegisterIdentityParams): Promise<string>;
    abstract resolveIdentity(params: ResolveIdentityParams): Promise<Cacao>;
    abstract unregisterIdentity(params: UnregisterIdentityParams): Promise<void>;
    abstract generateIdAuth(accountId: string, payload: JwtPayload): Promise<string>;
}
//# sourceMappingURL=types.d.ts.map