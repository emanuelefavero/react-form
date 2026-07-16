import './PostList.css';
import { Post } from './Post';

export const PostList = ({ posts, onDeletePost }) => {
  if (posts.length === 0) {
    return (
      <p className='empty-state' role='status'>
        No posts yet. Add your first post above.
      </p>
    );
  }

  return (
    <ul className='post-list'>
      {posts.map((post) => (
        <li key={`post-${post.id}`}>
          <Post post={post} onDeletePost={onDeletePost} />
        </li>
      ))}
    </ul>
  );
};
