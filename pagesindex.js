// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/gallery">Go to Gallery</Link>
    </>
  );
}

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my homepage with a gallery!" />
      </Head>
      <h1>Welcome to the Home Page</h1>
      {/* Rest of your page content */}
    </>
  );
}

