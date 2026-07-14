import './PostList.css';

const Post = ({ post }) =>
  post.title && <article className='post'>{post.title}</article>;

export const PostList = ({ posts }) =>
  posts.length > 0 && (
    <ul className='post-list'>
      {posts.map((post) => (
        <li key={`post-${post.id}`}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
