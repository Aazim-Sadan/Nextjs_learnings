import type { Post } from "@prisma/client";
import { prisma } from "..";

export type PostWithData = Post & {
  topic: { slug: string };
  _count: { comments: number };
  user: { name: string | null };
};

export const fetchPostbyTopicSlug = async (
  slug: string
): Promise<PostWithData[]> => {
  return prisma.post.findMany({
    where: {
      topic: {slug}
    },
    include: {
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
      user: { select: { name: true}}
    }
  })
};

export const fetchTopPost = async (): Promise<PostWithData[]> =>{
  return prisma.post.findMany({
    orderBy:[
      {
        comments:{_count:'desc'}
      }
    ],
    include: {
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
      user: { select: { name: true}}
    },
    take:5
  })
}
