import bodyParser from 'body-parser';

type Config = {
    port: number,
    urlencoded: bodyParser.OptionsUrlencoded,
    json: bodyParser.OptionsJson
};

export const config: Config = {
    port: Number(process.env.PORT ?? 3000),

    urlencoded: {
        limit: '100mb',
        extended: true
    },

    json: {
        limit: '100mb'
    }
};