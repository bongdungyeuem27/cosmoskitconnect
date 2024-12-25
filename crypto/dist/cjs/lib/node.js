"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeRipemd160 = exports.nodeSha512 = exports.nodeSha256 = exports.nodeHmacSha512Sign = exports.nodeHmacSha256Sign = exports.nodeAesDecrypt = exports.nodeAesEncrypt = void 0;
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const encoding_1 = require("@cosmoskitconnect/encoding");
const constants_1 = require("../constants");
function nodeAesEncrypt(iv, key, data) {
    const cipher = crypto_1.default.createCipheriv(constants_1.AES_NODE_ALGO, Buffer.from(key), Buffer.from(iv));
    return (0, encoding_1.bufferToArray)((0, encoding_1.concatBuffers)(cipher.update(Buffer.from(data)), cipher.final()));
}
exports.nodeAesEncrypt = nodeAesEncrypt;
function nodeAesDecrypt(iv, key, data) {
    const decipher = crypto_1.default.createDecipheriv(constants_1.AES_NODE_ALGO, Buffer.from(key), Buffer.from(iv));
    return (0, encoding_1.bufferToArray)((0, encoding_1.concatBuffers)(decipher.update(Buffer.from(data)), decipher.final()));
}
exports.nodeAesDecrypt = nodeAesDecrypt;
function nodeHmacSha256Sign(key, data) {
    const buf = crypto_1.default
        .createHmac(constants_1.HMAC_NODE_ALGO, Buffer.from(key))
        .update(Buffer.from(data))
        .digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeHmacSha256Sign = nodeHmacSha256Sign;
function nodeHmacSha512Sign(key, data) {
    const buf = crypto_1.default
        .createHmac(constants_1.SHA512_NODE_ALGO, Buffer.from(key))
        .update(Buffer.from(data))
        .digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeHmacSha512Sign = nodeHmacSha512Sign;
function nodeSha256(data) {
    const buf = crypto_1.default.createHash(constants_1.SHA256_NODE_ALGO).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeSha256 = nodeSha256;
function nodeSha512(data) {
    const buf = crypto_1.default.createHash(constants_1.SHA512_NODE_ALGO).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeSha512 = nodeSha512;
function nodeRipemd160(data) {
    const buf = crypto_1.default.createHash(constants_1.RIPEMD160_NODE_ALGO).update(Buffer.from(data)).digest();
    return (0, encoding_1.bufferToArray)(buf);
}
exports.nodeRipemd160 = nodeRipemd160;
//# sourceMappingURL=node.js.map