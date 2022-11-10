"use client";

import { useRouter } from "next/navigation";
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
  const posts = use(getData());

  const router = useRouter();

  const goBackHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Hello from client!</h1>
      <p>Post: {posts && posts[0].title}</p>
      <button onClick={goBackHome}>Back home</button>
    </div>
  );
}
