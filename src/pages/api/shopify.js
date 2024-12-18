import { fetchShopifyData } from '../../utils/shopify';

export default async function handler(req, res) {
  const { domain } = req.query;

  if (!domain) {
    return res.status(400).json({ error: 'Domain is required' });
  }

  try {
    const data = await fetchShopifyData(domain);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}