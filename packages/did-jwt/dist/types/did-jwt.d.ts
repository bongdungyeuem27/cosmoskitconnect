import { JwtHeader, JwtPayload } from "./types";
export declare const composeDidPkh: (accountId: string) => string;
export declare const jwtExp: (issuedAt: number) => number;
export declare const encodeJwt: (header: JwtHeader, payload: JwtPayload, signature: Uint8Array) => string;
export declare const encodeData: (header: JwtHeader, payload: JwtPayload) => string;
export declare const encodeEd25519Key: (keyHex: string) => string;
export declare const decodeEd25519Key: (encoded: string) => Uint8Array;
export declare const encodeX25519Key: (keyHex: string) => string;
export declare const decodeX25519Key: (encoded: string) => Uint8Array;
export declare const generateJWT: (identityKeyPair: [string, string], payload: JwtPayload) => Promise<string>;
//# sourceMappingURL=did-jwt.d.ts.map