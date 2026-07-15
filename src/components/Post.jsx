import './Post.css';
import { Trash2 } from 'lucide-react';

export const Post = ({ post, onDeletePost }) =>
  post.title && (
    <article className='post'>
      <h2>
        <span>{post.title}</span>
        <button
          type='button'
          aria-label={`Delete ${post.title}`}
          onClick={() => onDeletePost(post.id)}
        >
          <Trash2 size={18} aria-hidden='true' />
        </button>
      </h2>
    </article>
  );
