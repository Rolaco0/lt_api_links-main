export default async function handler(req, res) {
  const { tag } = req.query;
  const url = `https://github.com/Rolaco0/RolacoTools/releases/download/${tag}/RolacoTools.zip`;
  const response = await fetch(url);

  if (!response.ok) {
    res.status(response.status).send('Failed to fetch file.');
    return;
  }
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename="RolacoTools.zip"');
  const fileBuffer = await response.arrayBuffer();
  res.send(Buffer.from(fileBuffer));
}
