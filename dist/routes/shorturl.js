"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleShortURL = exports.ShortURL = void 0;
const express_1 = require("express");
const urls = new Map();
exports.ShortURL = (0, express_1.Router)();
exports.ShortURL.post("/", async (req, res) => {
    const { url } = req.body;
    if (url === undefined)
        return res.sendStatus(406);
    if (!urls.has(url)) {
        try {
            await fetch(url, {
                method: 'HEAD'
            });
            urls.set(url, Math.random().toString(36).slice(2));
            console.log(urls);
        }
        catch (error) {
            return res.status(500).send(String(error));
        }
    }
    return res.send(urls.get(url));
});
function handleShortURL(req, res) {
    const { id } = req.params;
    const url = Object.entries(Object.fromEntries(urls.entries())).find(([_, urlId]) => urlId === id);
    if (url === undefined) {
        return res.sendStatus(404);
    }
    return res.redirect(url[0]);
}
exports.handleShortURL = handleShortURL;
