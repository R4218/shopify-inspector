import { useState } from 'react';
import ResultDisplay from '../components/ResultDisplay';

export default function Home() {
  const [domain, setDomain] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setError('');
      setData(null);
      const res = await fetch(`/api/shopify?domain=${domain}`);
      if (!res.ok) throw new Error(await res.text());
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopify Inspector</h1>
      <input
        type="text"
        placeholder="Enter Shopify store domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={fetchData}>Inspect</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && <ResultDisplay data={data} domain={domain} />}
    </div>
  );
}
