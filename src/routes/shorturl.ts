import { Router, Request, Response } from "express"

const urls = new Map<string, string>();

export const ShortURL = Router();

ShortURL.post("/", async (req: Request, res: Response) => {
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
        } catch (error) {
            return res.status(500).send(String(error));
        }
    }

    return res.send(urls.get(url));
});

export function handleShortURL(req: Request, res: Response) {
    const { id } = req.params;
    const url = Object.entries(Object.fromEntries(urls.entries())).find(([_, urlId]) => urlId === id);

    if (url === undefined) {
        return res.sendStatus(404);
    }

    return res.redirect(url[0]);
}