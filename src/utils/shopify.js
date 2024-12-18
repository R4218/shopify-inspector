import axios from 'axios';

export async function fetchShopifyData(domain) {
  try {
    const formattedDomain = domain.replace(/https?:\/\//, '');
    const response = await axios.get(`https://${formattedDomain}`);
    const themeName = response.data.match(/Shopify.theme = {.*?name: '(.*?)'/)?.[1];
    const themeVersion = response.data.match(/version: '(.*?)'/)?.[1];
    const apps = [...response.data.matchAll(/cdn\.shopify\.com.*?\/apps\/(.*?\/.*?\.(js|css))/g)].map(
      (match) => match[1]
    );
    const lastUpdated = response.headers['last-modified'];

    return {
      themeName,
      themeVersion,
      lastUpdated,
      apps,
    };
  } catch (error) {
    throw new Error('Unable to fetch Shopify data.');
  }
}
