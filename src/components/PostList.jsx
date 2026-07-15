import './PostList.css';
import { Post } from './Post';

export const PostList = ({ posts, onDeletePost }) =>
  posts.length > 0 && (
    <ul className='post-list'>
      {posts.map((post) => (
        <li key={`post-${post.id}`}>
          <Post post={post} onDeletePost={onDeletePost} />
        </li>
      ))}
    </ul>
  );
