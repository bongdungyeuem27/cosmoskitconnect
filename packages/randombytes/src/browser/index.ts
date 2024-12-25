import * as env from "@cosmoskitconnect/environment";

export function randomBytes(length: number): Uint8Array {
  const browserCrypto = env.getBrowerCrypto();
  return browserCrypto.getRandomValues(new Uint8Array(length));
}
