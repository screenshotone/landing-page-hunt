import directory from "../../lib/directory";

export default async function handler(req, res) {
  const { slug } = req.body;
  const likes = await directory.likePage(slug);

  res.status(200).json({ likes: likes });
}
