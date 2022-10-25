import directory from "../../lib/directory";

export default async function handler(req, res) {
    const body = req.body
    if (!body.name || !body.url) {
        return res.status(400).json({ data: 'Name and URL are required' })
    }

    const landingPage = await directory.submitPage(body.name, body.url);

    res.status(200).json(landingPage);
}