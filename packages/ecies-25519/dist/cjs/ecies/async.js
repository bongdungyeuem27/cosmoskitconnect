"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.decryptWithSharedKey = exports.encrypt = exports.encryptWithSharedKey = exports.getEciesKeys = void 0;
const tslib_1 = require("tslib");
const crypto_1 = require("@cosmoskitconnect/crypto");
const encoding_1 = require("@cosmoskitconnect/encoding");
const shared_1 = require("./shared");
function getEciesKeys(sharedKey) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const hash = yield (0, crypto_1.sha512)(sharedKey);
        return { encryptionKey: (0, shared_1.getEncryptionKey)(hash), macKey: (0, shared_1.getMacKey)(hash) };
    });
}
exports.getEciesKeys = getEciesKeys;
function encryptWithSharedKey(msg, sharedKey, publicKey, iv = (0, crypto_1.randomBytes)(crypto_1.IV_LENGTH)) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { encryptionKey, macKey } = yield getEciesKeys(sharedKey);
        const ciphertext = yield (0, crypto_1.aesCbcEncrypt)(iv, encryptionKey, msg);
        const dataToMac = (0, encoding_1.concatArrays)(iv, publicKey, ciphertext);
        const mac = yield (0, crypto_1.hmacSha256Sign)(macKey, dataToMac);
        return (0, shared_1.serialize)({ iv, publicKey, ciphertext, mac });
    });
}
exports.encryptWithSharedKey = encryptWithSharedKey;
function encrypt(msg, receiverPublicKey, opts) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { publicKey, privateKey } = (0, shared_1.getSenderKeyPair)(opts);
        const sharedKey = (0, shared_1.getSharedKey)(privateKey, receiverPublicKey);
        return encryptWithSharedKey(msg, sharedKey, publicKey, opts === null || opts === void 0 ? void 0 : opts.iv);
    });
}
exports.encrypt = encrypt;
function decryptWithSharedKey(encrypted, sharedKey) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { iv, publicKey, mac, ciphertext } = (0, shared_1.deserialize)(encrypted);
        const { encryptionKey, macKey } = yield getEciesKeys(sharedKey);
        const dataToMac = (0, encoding_1.concatArrays)(iv, publicKey, ciphertext);
        const macTest = yield (0, crypto_1.hmacSha256Verify)(macKey, dataToMac, mac);
        (0, crypto_1.assert)(macTest, crypto_1.ERROR_BAD_MAC);
        const msg = yield (0, crypto_1.aesCbcDecrypt)(iv, encryptionKey, ciphertext);
        return msg;
    });
}
exports.decryptWithSharedKey = decryptWithSharedKey;
function decrypt(encrypted, privateKey) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { publicKey } = (0, shared_1.deserialize)(encrypted);
        const sharedKey = (0, shared_1.getSharedKey)(privateKey, publicKey);
        return decryptWithSharedKey(encrypted, sharedKey);
    });
}
exports.decrypt = decrypt;
//# sourceMappingURL=async.js.map