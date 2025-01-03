import { aesCbcEncrypt, aesCbcDecrypt, hmacSha256Sign, hmacSha256Verify, randomBytes, sha512, IV_LENGTH, ERROR_BAD_MAC, assert, } from "@cosmoskitconnect/crypto";
import { concatArrays } from "@cosmoskitconnect/encoding";
import { getEncryptionKey, getMacKey, getSharedKey, getSenderKeyPair, serialize, deserialize, } from "./shared";
export async function getEciesKeys(sharedKey) {
    const hash = await sha512(sharedKey);
    return { encryptionKey: getEncryptionKey(hash), macKey: getMacKey(hash) };
}
export async function encryptWithSharedKey(msg, sharedKey, publicKey, iv = randomBytes(IV_LENGTH)) {
    const { encryptionKey, macKey } = await getEciesKeys(sharedKey);
    const ciphertext = await aesCbcEncrypt(iv, encryptionKey, msg);
    const dataToMac = concatArrays(iv, publicKey, ciphertext);
    const mac = await hmacSha256Sign(macKey, dataToMac);
    return serialize({ iv, publicKey, ciphertext, mac });
}
export async function encrypt(msg, receiverPublicKey, opts) {
    const { publicKey, privateKey } = getSenderKeyPair(opts);
    const sharedKey = getSharedKey(privateKey, receiverPublicKey);
    return encryptWithSharedKey(msg, sharedKey, publicKey, opts?.iv);
}
export async function decryptWithSharedKey(encrypted, sharedKey) {
    const { iv, publicKey, mac, ciphertext } = deserialize(encrypted);
    const { encryptionKey, macKey } = await getEciesKeys(sharedKey);
    const dataToMac = concatArrays(iv, publicKey, ciphertext);
    const macTest = await hmacSha256Verify(macKey, dataToMac, mac);
    assert(macTest, ERROR_BAD_MAC);
    const msg = await aesCbcDecrypt(iv, encryptionKey, ciphertext);
    return msg;
}
export async function decrypt(encrypted, privateKey) {
    const { publicKey } = deserialize(encrypted);
    const sharedKey = getSharedKey(privateKey, publicKey);
    return decryptWithSharedKey(encrypted, sharedKey);
}
//# sourceMappingURL=async.js.map