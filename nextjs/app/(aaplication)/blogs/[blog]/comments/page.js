export default async function Blogs({params}) {
    const resolvedPromise = await params;
    console.log(resolvedPromise);
  
    const {blog} = resolvedPromise;
    
    return (
      <div>Comments on {blog}</div>
  
    );
  }
  