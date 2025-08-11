import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div className="mx-auto my-8 max-w-4xl px-4">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <br />
      <p>Paragraph</p>
      <p className="body-reguler">Paragraph (reguler)</p>
      <p className="body-medium">Paragraph (medium)</p>
      <p className="body-semibold">Paragraph (semibold)</p>
      <p className="body-small">Paragraph (small)</p>
      <p className="card-text">Paragraph (card-text)</p>
      <p className="caption">Paragraph (caption)</p>
      <p className="caption-semibold">Paragraph (caption-semibold)</p>
      <br />
      <div className="flex flex-col">
        <Link href="/typography">Text Link</Link>
        <div className="flex items-center gap-8">
          <Link href="/typography" className="nav-home text-[16px]">
            Home
          </Link>
          <Link href="/typography" className="nav-links text-[14px]">
            Text Navlinks
          </Link>
        </div>
        <div className="flex items-center gap-8 bg-black">
          <Link href="/typography" className="nav-footer-home text-[16px]">
            Footer Home
          </Link>
          <Link href="/typography" className="nav-footer-links text-[14px]">
            Text Footer Navlinks
          </Link>
        </div>
      </div>
      <br />
      <div className="flex gap-2">
        <div className="bg-background flex aspect-square w-32 items-center justify-center rounded-full border border-teal-500">
          Background
        </div>
        <div className="flex aspect-square w-32 items-center justify-center rounded-full border border-teal-500 bg-white">
          White
        </div>
        <div className="flex aspect-square w-32 items-center justify-center rounded-full border border-teal-500 bg-black">
          Black
        </div>
        <div className="bg-dark-grey flex aspect-square w-32 items-center justify-center rounded-full border border-teal-500">
          Dark Grey
        </div>
        <div className="bg-grey flex aspect-square w-32 items-center justify-center rounded-full border border-teal-500">
          Grey
        </div>
        <div className="bg-light-grey flex aspect-square w-32 items-center justify-center rounded-full border border-teal-500">
          Light Grey
        </div>
      </div>
    </div>
  );
}
