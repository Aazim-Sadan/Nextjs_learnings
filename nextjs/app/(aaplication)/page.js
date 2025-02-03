import Link from "next/link";
import ComponentPage from "../_components/page";


export default function Home() {
  return (
    <>
    <h1>Welcome</h1>
    <ComponentPage/>
    <p>
    <Link href="/about">about</Link>
    </p>
    <p>
      <Link href="/services">services</Link>
    </p>
    <p>
      <Link href="/blogs">blogs</Link>
    </p>
    <p>
      <Link href="files">Files</Link>
    </p>
    </>
  );
}
