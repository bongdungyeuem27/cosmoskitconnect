import { ErrorResponse, JsonRpcError, JsonRpcRequest, JsonRpcResult } from "./types";
export declare function payloadId(): number;
export declare function getBigIntRpcId(): bigint;
export declare function formatJsonRpcRequest<T = any>(method: string, params: T, id?: number): JsonRpcRequest<T>;
export declare function formatJsonRpcResult<T = any>(id: number, result: T): JsonRpcResult<T>;
export declare function formatJsonRpcError(id: number, error?: string | ErrorResponse, data?: string): JsonRpcError;
export declare function formatErrorMessage(error?: string | ErrorResponse, data?: string): ErrorResponse;
//# sourceMappingURL=format.d.ts.map