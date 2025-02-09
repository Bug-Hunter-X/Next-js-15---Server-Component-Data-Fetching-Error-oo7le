```javascript
// pages/index.js

import { Suspense } from 'react';

async function getData() {
  // Simulate fetching data from an API
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { message: 'Data fetched successfully!' };
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>{data.message}</p>
    </div>
  );
}
```