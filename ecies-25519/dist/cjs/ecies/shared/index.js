"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = exports.serialize = exports.getMacKey = exports.getEncryptionKey = exports.getSharedKey = exports.getSenderKeyPair = exports.generateKeyPair = exports.generatePnrgFromEntropy = exports.derive = void 0;
const tslib_1 = require("tslib");
const x25519 = tslib_1.__importStar(require("@stablelib/x25519"));
const encoding_1 = require("@cosmoskitconnect/encoding");
const crypto_1 = require("@cosmoskitconnect/crypto");
function derive(privateKey, publicKey) {
    return x25519.sharedKey(privateKey, publicKey);
}
exports.derive = derive;
function generatePnrgFromEntropy(entropy) {
    return {
        isAvailable: true,
        randomBytes: () => entropy,
    };
}
exports.generatePnrgFromEntropy = generatePnrgFromEntropy;
function generateKeyPair(entropy) {
    const prng = typeof entropy !== "undefined" ? generatePnrgFromEntropy(entropy) : undefined;
    const keyPair = x25519.generateKeyPair(prng);
    return {
        publicKey: keyPair.publicKey,
        privateKey: keyPair.secretKey,
    };
}
exports.generateKeyPair = generateKeyPair;
function getSenderKeyPair(opts) {
    const keyPair = (opts === null || opts === void 0 ? void 0 : opts.sender) || generateKeyPair();
    return {
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
    };
}
exports.getSenderKeyPair = getSenderKeyPair;
function getSharedKey(privateKey, publicKey) {
    return derive(privateKey, publicKey);
}
exports.getSharedKey = getSharedKey;
function getEncryptionKey(hash) {
    return new Uint8Array(hash.slice(crypto_1.LENGTH_0, crypto_1.KEY_LENGTH));
}
exports.getEncryptionKey = getEncryptionKey;
function getMacKey(hash) {
    return new Uint8Array(hash.slice(crypto_1.KEY_LENGTH));
}
exports.getMacKey = getMacKey;
function serialize(opts) {
    return (0, encoding_1.concatArrays)(opts.iv, opts.publicKey, opts.mac, opts.ciphertext);
}
exports.serialize = serialize;
function deserialize(arr) {
    const slice0 = crypto_1.LENGTH_0;
    const slice1 = slice0 + crypto_1.IV_LENGTH;
    const slice2 = slice1 + crypto_1.KEY_LENGTH;
    const slice3 = slice2 + crypto_1.MAC_LENGTH;
    const slice4 = arr.length;
    return {
        iv: arr.slice(slice0, slice1),
        publicKey: arr.slice(slice1, slice2),
        mac: arr.slice(slice2, slice3),
        ciphertext: arr.slice(slice3, slice4),
    };
}
exports.deserialize = deserialize;
//# sourceMappingURL=index.js.map