import './PostForm.css';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

const INITIAL_FORM_DATA = {
  author: '',
  title: '',
  body: '',
  public: false,
};

export const PostForm = ({ onAddPost }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleFormData = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: crypto.randomUUID(),
      ...formData,
    };

    onAddPost(newPost);
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <h2 className='form-title'>Create a new post</h2>

      <div className='form-group'>
        <label htmlFor='post-form-author'>Author</label>
        <Input
          name='author'
          placeholder='Post author'
          id='post-form-author'
          value={formData.author}
          onChange={handleFormData}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='post-form-title'>Title</label>
        <Input
          name='title'
          placeholder='Post title'
          id='post-form-title'
          value={formData.title}
          onChange={handleFormData}
          required
        />
      </div>

      <div className='form-group form-group-wide'>
        <label htmlFor='post-form-body'>Body</label>
        <textarea
          className='input form-textarea'
          name='body'
          placeholder='Write your post...'
          id='post-form-body'
          value={formData.body}
          onChange={handleFormData}
          required
        />
      </div>

      <div className='form-actions'>
        <label className='checkbox-label' htmlFor='post-form-public'>
          <Input
            className='checkbox-input'
            type='checkbox'
            name='public'
            id='post-form-public'
            checked={formData.public}
            onChange={handleFormData}
          />
          Publish post
        </label>

        <Button type='submit' variant={Button.variant.primary}>
          Add Post
        </Button>
      </div>
    </form>
  );
};
