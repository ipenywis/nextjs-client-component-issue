"use client";

import { useRouter } from "next/router";
import { use } from "react";

//Example copied from the Next.js 13 Docs
//=> https://beta.nextjs.org/docs/data-fetching/fetching#example-fetch-and-use-in-client-components
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default function Page() {
  // const name = use(getData());

  const router = useRouter();

  const goBackHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Hello from client!</h1>
      <button onClick={goBackHome}>Back home</button>
    </div>
  );
}
