import * as screenshotone from 'screenshotone-api-sdk';

const client = new screenshotone.Client(process.env.SCREENSHOTONE_ACCESS_KEY, process.env.SCREENSHOTONE_SECRET_KEY);

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