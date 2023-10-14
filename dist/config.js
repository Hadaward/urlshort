"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: Number(process.env.PORT ?? 3000),
    urlencoded: {
        limit: '100mb',
        extended: true
    },
    json: {
        limit: '100mb'
    }
};
