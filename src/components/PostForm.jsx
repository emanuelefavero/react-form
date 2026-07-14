import './PostForm.css';
import { useState } from 'react';

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
      <button type='submit'>Add Post</button>
    </form>
  );
};
