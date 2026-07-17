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
      {/* Inputs */}
      <div className='form-group'>
        <label htmlFor='post-form-author' className='sr-only'>
          Author
        </label>
        <Input
          name='author'
          placeholder='Author'
          id='post-form-author'
          value={formData.author}
          onChange={handleFormData}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='post-form-title' className='sr-only'>
          Title
        </label>
        <Input
          name='title'
          placeholder='Title'
          id='post-form-title'
          value={formData.title}
          onChange={handleFormData}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='post-form-body' className='sr-only'>
          Body
        </label>
        <Input
          name='body'
          placeholder='Body'
          id='post-form-body'
          value={formData.body}
          onChange={handleFormData}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='post-form-public'>Public</label>
        <Input
          type='checkbox'
          name='public'
          id='post-form-public'
          value={formData.public}
          onChange={handleFormData}
          required
        />
      </div>

      {/* Submit Button */}
      <Button type='submit' variant={Button.variant.primary}>
        Add Post
      </Button>
    </form>
  );
};
