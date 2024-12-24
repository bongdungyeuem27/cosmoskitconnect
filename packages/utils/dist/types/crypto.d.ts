import { CryptoTypes } from "@cosmoskitconnect/types";
import { ec as EC } from "elliptic";
export declare const BASE10 = "base10";
export declare const BASE16 = "base16";
export declare const BASE64 = "base64pad";
export declare const BASE64URL = "base64url";
export declare const UTF8 = "utf8";
export declare const TYPE_0 = 0;
export declare const TYPE_1 = 1;
export declare const TYPE_2 = 2;
export type P256KeyDataType = {
    crv: "P-256";
    ext: true;
    key_ops: ["verify"];
    kty: string;
    x: string;
    y: string;
};
export declare function generateKeyPair(): CryptoTypes.KeyPair;
export declare function generateRandomBytes32(): string;
export declare function deriveSymKey(privateKeyA: string, publicKeyB: string): string;
export declare function hashKey(key: string): string;
export declare function hashMessage(message: string): string;
export declare function encodeTypeByte(type: number): Uint8Array;
export declare function decodeTypeByte(byte: Uint8Array): number;
export declare function encrypt(params: CryptoTypes.EncryptParams): string;
export declare function encodeTypeTwoEnvelope(message: string, encoding?: CryptoTypes.EncodingType): string;
export declare function decrypt(params: CryptoTypes.DecryptParams): string;
export declare function decodeTypeTwoEnvelope(encoded: string, encoding?: CryptoTypes.EncodingType): string;
export declare function serialize(params: CryptoTypes.EncodingParams): string;
export declare function deserialize(params: CryptoTypes.DecodingParams): CryptoTypes.EncodingParams;
export declare function validateDecoding(encoded: string, opts?: CryptoTypes.DecodeOptions): CryptoTypes.EncodingValidation;
export declare function validateEncoding(opts?: CryptoTypes.EncodeOptions): CryptoTypes.EncodingValidation;
export declare function isTypeOneEnvelope(result: CryptoTypes.EncodingValidation): result is CryptoTypes.TypeOneParams;
export declare function isTypeTwoEnvelope(result: CryptoTypes.EncodingValidation): result is CryptoTypes.TypeOneParams;
export declare function getCryptoKeyFromKeyData(keyData: P256KeyDataType): EC.KeyPair;
export declare function verifyP256Jwt<T>(token: string, keyData: P256KeyDataType): T;
//# sourceMappingURL=crypto.d.ts.map