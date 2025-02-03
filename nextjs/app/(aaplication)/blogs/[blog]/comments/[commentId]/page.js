export default async function CommentId({params}) {
    const resolvedPromise = await params;
    console.log(resolvedPromise);
  
    const {blog, commentId} = resolvedPromise;
    
    return (
      <div>Comment no. <i>{commentId}</i> on <b>{blog}</b></div>
  
    );
  }
  