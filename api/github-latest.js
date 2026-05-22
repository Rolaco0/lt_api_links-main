export default async function handler(req, res) {
  const response = await fetch('https://api.github.com/repos/Rolaco0/RolacoTools/releases/latest');
  const data = await response.json();
  res.status(200).json(data);
}
