import './PostForm.css';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

const INITIAL_FORM_DATA = {
  author: '',
  title: '',
  body: '',
  public: true,
};

const validateForm = (data) => {
  const errors = {};

  if (!data.author) {
    errors.author = 'Author is required';
  } else if (data.author.length < 3) {
    errors.author = 'Author must be at least 3 characters';
  } else if (data.author.length > 50) {
    errors.author = 'Author must be less than 50 characters';
  }

  if (!data.title) {
    errors.title = 'Title is required';
  } else if (data.title.length < 3) {
    errors.title = 'Title must be at least 3 characters';
  } else if (data.title.length > 100) {
    errors.title = 'Title must be less than 100 characters';
  }

  if (!data.body) {
    errors.body = 'Body is required';
  } else if (data.body.length < 10) {
    errors.body = 'Body must be at least 10 characters';
  } else if (data.body.length > 1000) {
    errors.body = 'Body must be less than 1000 characters';
  }

  return errors;
};

export const PostForm = ({ onAddPost }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});

  const handleFormData = (e) => {
    const { type, name, value, checked } = e.target;

    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedData = {
      ...formData,
      author: formData.author.trim(),
      title: formData.title.trim(),
      body: formData.body.trim(),
    };

    const validationErrors = validateForm(submittedData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Focus the first invalid input field
      const firstInvalidField = Object.keys(validationErrors)[0];
      const firstInvalidInput = document.querySelector(
        `[name="${firstInvalidField}"]`,
      );
      if (firstInvalidInput) firstInvalidInput.focus();

      return;
    }

    onAddPost(submittedData);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  };

  return (
    <form
      className='post-form'
      onSubmit={handleSubmit}
      aria-labelledby='post-form-title'
      noValidate
    >
      <h2 className='form-title' id='post-form-title'>
        Create a new post
      </h2>

      <div className='form-group'>
        <label htmlFor='post-form-author'>Author</label>
        <Input
          name='author'
          placeholder='Post author'
          id='post-form-author'
          value={formData.author}
          onChange={handleFormData}
          aria-invalid={Boolean(errors.author)}
          aria-describedby={errors.author ? 'author-error' : undefined}
          required
          minLength={3}
          maxLength={50}
        />

        {errors.author && (
          <p className='form-error' id='author-error'>
            {errors.author}
          </p>
        )}
      </div>

      <div className='form-group'>
        <label htmlFor='post-form-title'>Title</label>
        <Input
          name='title'
          placeholder='Post title'
          id='post-form-title'
          value={formData.title}
          onChange={handleFormData}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'title-error' : undefined}
          required
          minLength={3}
          maxLength={100}
        />

        {errors.title && (
          <p className='form-error' id='title-error'>
            {errors.title}
          </p>
        )}
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
          aria-invalid={Boolean(errors.body)}
          aria-describedby={errors.body ? 'body-error' : undefined}
          required
          minLength={10}
          maxLength={1000}
        />

        {errors.body && (
          <p className='form-error' id='body-error'>
            {errors.body}
          </p>
        )}
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
