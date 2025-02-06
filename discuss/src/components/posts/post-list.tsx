import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'

type PostListProps = {
    fetchData : () => Promise<PostWithData[]>
}

const PostList : React.FC<PostListProps> = async ({fetchData}) => {

    const posts = await fetchData();

    return (
        <div className='flex flex-col gap-2'>
            {
               posts.map((post, index) => (
                    <Card key={post.id}>
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription className='flex items-center justify-between'>
                                <h1>By {post.user.name}</h1>
                                <p>{post._count.comments} comments</p>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))
            }
        </div>
    )
}

export default PostList