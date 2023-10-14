"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const shorturl_1 = require("./routes/shorturl");
const app = (0, express_1.default)();
app.use('/', express_1.default.static('public'));
// Setup middle-wares
app.use(express_1.default.json(config_1.config.json));
app.use(express_1.default.urlencoded(config_1.config.urlencoded));
// Setup routes
app.all("*", (_, __, next) => next());
app.use("/shorturl", shorturl_1.ShortURL);
app.use("/:id", shorturl_1.handleShortURL);
app.listen(config_1.config.port, () => console.log(`App running on port ${config_1.config.port}`));
