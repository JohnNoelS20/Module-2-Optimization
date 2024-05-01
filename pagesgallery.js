// pages/gallery.js
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <>
      <h1>Image Gallery</h1>
      <Image src="/local-image.jpg" alt="Local Image" width={500} height={500} />
      <Image src="https://example.com/remote-image.jpg" alt="Remote Image" width={500} height={500} />
      {/* Add more images as needed */}
      <Link href="/">Back to Home</Link>
    </>
  );
}
