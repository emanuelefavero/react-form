import './PostForm.css';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

const INITIAL_INPUT = '';

export const PostForm = ({ onAddPost }) => {
  const [input, setInput] = useState(INITIAL_INPUT);

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTitle = input.trim();
    if (!newTitle) return;

    onAddPost(newTitle);
    setInput(INITIAL_INPUT);
  };

  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <label htmlFor='new-post-title' className='sr-only'>
        New Post Title
      </label>
      <Input
        placeholder='New Post Title'
        id='new-post-title'
        value={input}
        onChange={handleChange}
        required
      />
      <Button type='submit' variant={Button.variant.primary}>
        Add Post
      </Button>
    </form>
  );
};
