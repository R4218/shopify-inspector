export default function ResultDisplay({ data, domain }) {
    return (
      <div className="mt-6 w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Results for {domain}</h2>
        <p><strong>Theme Name:</strong> {data.themeName || 'Not found'}</p>
        <p><strong>Version:</strong> {data.themeVersion || 'Not found'}</p>
        <p><strong>Last Updated:</strong> {data.lastUpdated || 'Not available'}</p>
        <h3 className="text-lg font-medium mt-4">Installed Apps:</h3>
        <ul className="list-disc pl-5">
          {data.apps.length ? data.apps.map((app, index) => (
            <li key={index}>{app}</li>
          )) : <li>No apps detected</li>}
        </ul>
      </div>
    );
  }