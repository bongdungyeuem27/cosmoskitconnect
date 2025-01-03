"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBytes = void 0;
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const encoding_1 = require("@cosmoskitconnect/encoding");
function randomBytes(length) {
    const buf = crypto_1.default.randomBytes(length);
    return (0, encoding_1.bufferToArray)(buf);
}
exports.randomBytes = randomBytes;
//# sourceMappingURL=index.js.map