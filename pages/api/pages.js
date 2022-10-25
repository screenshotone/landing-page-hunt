import directory from "../../lib/directory";

export default async function handler(req, res) {
  const landingPages = await directory.loadLandingPages();

  res.status(200).json({ landingPages: landingPages });
}
