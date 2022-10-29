"use client";

import { use } from "react";

//Example copied from the Next.js 13 Docs
//=> https://beta.nextjs.org/docs/data-fetching/fetching#example-fetch-and-use-in-client-components
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Page() {
  const name = use(getData());

  return <div>Hello from client!</div>;
}
