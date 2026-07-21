import './Post.css';
import { Trash2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Post = ({ post, onDeletePost }) => (
  <article className='post'>
    <div className='content'>
      <h2>{post.title}</h2>
      <p className='author text-sm'>By {post.author}</p>
    </div>
    <Button
      variant={Button.variant.danger}
      className='delete-button'
      aria-label={`Delete ${post.title}`}
      onClick={() => onDeletePost(post.id)}
    >
      <Trash2 size={18} aria-hidden='true' />
    </Button>
  </article>
);
