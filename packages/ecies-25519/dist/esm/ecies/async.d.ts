import { EncryptOpts } from "@cosmoskitconnect/crypto";
export declare function getEciesKeys(sharedKey: Uint8Array): Promise<{
    encryptionKey: Uint8Array;
    macKey: Uint8Array;
}>;
export declare function encryptWithSharedKey(msg: Uint8Array, sharedKey: Uint8Array, publicKey: Uint8Array, iv?: Uint8Array): Promise<Uint8Array>;
export declare function encrypt(msg: Uint8Array, receiverPublicKey: Uint8Array, opts?: EncryptOpts): Promise<Uint8Array>;
export declare function decryptWithSharedKey(encrypted: Uint8Array, sharedKey: Uint8Array): Promise<Uint8Array>;
export declare function decrypt(encrypted: Uint8Array, privateKey: Uint8Array): Promise<Uint8Array>;
//# sourceMappingURL=async.d.ts.map