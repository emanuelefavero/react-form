import './PostForm.css';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const INITIAL_INPUT = '';

export const PostForm = ({ onAddPost }) => {
  const [input, setInput] = useState(INITIAL_INPUT);

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPost(input);
    setInput(INITIAL_INPUT);
  };

  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='New Post Title'
        value={input}
        onChange={handleChange}
      />
      <Button type='submit' variant={Button.variant.primary}>
        Add Post
      </Button>
    </form>
  );
};
