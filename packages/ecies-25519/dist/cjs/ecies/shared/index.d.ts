import { KeyPair, PNRG, Encrypted, EncryptOpts } from "@cosmoskitconnect/crypto";
export declare function derive(privateKey: Uint8Array, publicKey: Uint8Array): Uint8Array;
export declare function generatePnrgFromEntropy(entropy: Uint8Array): PNRG;
export declare function generateKeyPair(entropy?: Uint8Array): KeyPair;
export declare function getSenderKeyPair(opts?: Partial<EncryptOpts>): {
    privateKey: Uint8Array;
    publicKey: Uint8Array;
};
export declare function getSharedKey(privateKey: Uint8Array, publicKey: Uint8Array): Uint8Array;
export declare function getEncryptionKey(hash: Uint8Array): Uint8Array;
export declare function getMacKey(hash: Uint8Array): Uint8Array;
export declare function serialize(opts: Encrypted): Uint8Array;
export declare function deserialize(arr: Uint8Array): Encrypted;
//# sourceMappingURL=index.d.ts.map