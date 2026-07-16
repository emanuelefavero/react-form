import './Post.css';
import { Trash2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Post = ({ post, onDeletePost }) => (
  <article className='post'>
    <h2>{post.title}</h2>
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
