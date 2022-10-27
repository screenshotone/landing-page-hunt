import * as screenshotone from 'screenshotone-api-sdk';

let client = null;
if (process.env.NODE_ENV === 'production') {
    client = new screenshotone.Client(process.env.SCREENSHOTONE_ACCESS_KEY, process.env.SCREENSHOTONE_SECRET_KEY);
} else {
    if (!global.client) {
        global.client = new screenshotone.Client(process.env.SCREENSHOTONE_ACCESS_KEY, process.env.SCREENSHOTONE_SECRET_KEY);
    }

    client = global.client;
}

export default function url(url) {
    const options = screenshotone.TakeOptions
        .url(url)
        .cache(true)
        .cacheTtl(2000000)
        .blockChats(true)
        .blockCookieBanners(true)
        .blockAds(true);

    return client.generateTakeURL(options);
}