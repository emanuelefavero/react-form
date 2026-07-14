import { posts as initialPosts } from '@/data/posts';
import { useState } from 'react';

const Post = ({ post }) => post.title && <article>{post.title}</article>;

const PostList = ({ posts }) =>
  posts.length > 0 && (
    <ul>
      {posts.map((post) => (
        <li key={`post-${post.id}`}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );

export const Posts = () => {
  const [posts] = useState(initialPosts);

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};
