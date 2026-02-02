import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <main>
      <Link
        href="/calendar"
        className="group border-input inline-flex w-full items-center justify-center rounded-full border bg-linear-to-tr from-white via-orange-200 to-purple-300 px-10 py-4 text-center text-gray-900 transition-colors hover:bg-transparent/90 sm:w-auto"
      >
        Open demo
      </Link>
    </main>
  );
}
