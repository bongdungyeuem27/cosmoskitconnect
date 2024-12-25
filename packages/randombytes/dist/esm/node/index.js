import crypto from "crypto";
import { bufferToArray } from "@cosmoskitconnect/encoding";
export function randomBytes(length) {
    const buf = crypto.randomBytes(length);
    return bufferToArray(buf);
}
//# sourceMappingURL=index.js.map