import './PostList.css';
import { Post } from './Post';

export const PostList = ({ posts, onDeletePost }) => {
  if (posts.length === 0) {
    return (
      <p className='post-list-empty' role='status'>
        No posts yet. Add your first post above.
      </p>
    );
  }

  return (
    <section aria-labelledby='posts-title'>
      <h2 id='posts-title' className='sr-only'>
        Posts
      </h2>

      {posts.length > 0 && (
        <ul className='post-list'>
          {posts.map((post) => (
            <li key={`post-${post.id}`}>
              <Post post={post} onDeletePost={onDeletePost} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
