"use client";

import { usePathname } from "next/navigation";

export default function () {
const a = usePathname();
console.log(a);


  return (
    <>
    <h1>Blog Page not found</h1>
    <p>Could not found the page you're looking for</p>
    </>
  )
}
