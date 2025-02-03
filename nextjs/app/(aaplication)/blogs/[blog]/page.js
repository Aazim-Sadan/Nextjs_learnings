import { notFound } from "next/navigation";

export async function generateMetadata({params}) {
  const {blog} = await params;
  return{
    title:  `Blog ${blog}`
  }
}


export default async function Blogs({params}) {
  const resolvedPromise = await params;
  const {blog} = resolvedPromise;
  
  if(!/^\d+$/.test(blog)){
    notFound()
  }
  return (
    <div>Blog {blog}</div>
  );
}
