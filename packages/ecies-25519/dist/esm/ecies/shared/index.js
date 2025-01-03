import * as x25519 from "@stablelib/x25519";
import { concatArrays } from "@cosmoskitconnect/encoding";
import { LENGTH_0, KEY_LENGTH, IV_LENGTH, MAC_LENGTH, } from "@cosmoskitconnect/crypto";
export function derive(privateKey, publicKey) {
    return x25519.sharedKey(privateKey, publicKey);
}
export function generatePnrgFromEntropy(entropy) {
    return {
        isAvailable: true,
        randomBytes: () => entropy,
    };
}
export function generateKeyPair(entropy) {
    const prng = typeof entropy !== "undefined" ? generatePnrgFromEntropy(entropy) : undefined;
    const keyPair = x25519.generateKeyPair(prng);
    return {
        publicKey: keyPair.publicKey,
        privateKey: keyPair.secretKey,
    };
}
export function getSenderKeyPair(opts) {
    const keyPair = opts?.sender || generateKeyPair();
    return {
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
    };
}
export function getSharedKey(privateKey, publicKey) {
    return derive(privateKey, publicKey);
}
export function getEncryptionKey(hash) {
    return new Uint8Array(hash.slice(LENGTH_0, KEY_LENGTH));
}
export function getMacKey(hash) {
    return new Uint8Array(hash.slice(KEY_LENGTH));
}
export function serialize(opts) {
    return concatArrays(opts.iv, opts.publicKey, opts.mac, opts.ciphertext);
}
export function deserialize(arr) {
    const slice0 = LENGTH_0;
    const slice1 = slice0 + IV_LENGTH;
    const slice2 = slice1 + KEY_LENGTH;
    const slice3 = slice2 + MAC_LENGTH;
    const slice4 = arr.length;
    return {
        iv: arr.slice(slice0, slice1),
        publicKey: arr.slice(slice1, slice2),
        mac: arr.slice(slice2, slice3),
        ciphertext: arr.slice(slice3, slice4),
    };
}
//# sourceMappingURL=index.js.map