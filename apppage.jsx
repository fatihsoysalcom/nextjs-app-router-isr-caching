import React from 'react';

// This option configures the revalidation interval for the entire page.
// It's similar to `revalidate` in `getStaticProps` for the Pages Router,
// enabling Incremental Static Regeneration (ISR) for this server component.
export const revalidate = 5; // Revalidate at most every 5 seconds

async function getData() {
  // Simulate fetching data from an external API.
  // In the App Router, `fetch` requests are automatically cached by default.
  // The `revalidate` export above controls how often this data (and the page output) is re-fetched.
  const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Istanbul', {
    // We use `cache: 'no-store'` here to ensure the API call itself always gets fresh data.
    // This helps to clearly demonstrate that it's the *page output* that is being cached
    // and revalidated by Next.js, not the underlying API fetch cache.
    cache: 'no-store' // Prevent Next.js from caching the fetch request itself
  });
  const data = await response.json();
  return {
    time: data.datetime,
    unixTime: data.unixtime,
    generatedAt: Date.now(), // Server time when this component was rendered
  };
}

export default async function HomePage() {
  const { time, generatedAt } = await getData();

  return (
    <div style={{
      fontFamily: 'sans-serif',
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <h1 style={{ color: '#0070f3' }}>Next.js Caching Example (App Router ISR)</h1>
      <p>This page demonstrates Incremental Static Regeneration (ISR) in the Next.js App Router using <code>export const revalidate = 5;</code>.</p>
      <p>Data fetched from API (Istanbul time): <strong>{new Date(time).toLocaleTimeString()}</strong></p>
      <p>Page generated at (server time): <strong>{new Date(generatedAt).toLocaleTimeString()}</strong></p>
      <p>
        Refresh the page multiple times. The &quot;Page generated at&quot; time will only update after the <code>revalidate</code> interval (5 seconds in this example) has passed since the last request.
        This shows the cached page output being served for subsequent requests within the interval, reducing server load and improving performance.
      </p>
      <p>Current client time: {new Date().toLocaleTimeString()}</p>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        <em>Note: The API time might be slightly different from &quot;Page generated at&quot; because the API call itself is not cached by Next.js in this specific setup (due to <code>cache: 'no-store'</code> on fetch) to highlight page output revalidation. If <code>cache: 'no-store'</code> was removed, the API fetch itself would also be cached according to <code>revalidate</code>.</em>
      </p>
    </div>
  );
}
