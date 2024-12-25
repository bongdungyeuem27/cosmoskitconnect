import * as env from "@cosmoskitconnect/environment";
export function randomBytes(length) {
    const browserCrypto = env.getBrowerCrypto();
    return browserCrypto.getRandomValues(new Uint8Array(length));
}
//# sourceMappingURL=index.js.map