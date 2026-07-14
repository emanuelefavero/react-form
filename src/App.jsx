import './App.css';
import { PostList } from '@/components/PostList';
import { posts as INITIAL_POSTS } from '@/data/posts';
import { useState } from 'react';
import { PostForm } from './components/PostForm';

export function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const handleAddPost = (newPostTitle) => {
    const newPost = {
      id: crypto.randomUUID(),
      title: newPostTitle,
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className='app'>
      <header className='header'>
        <div className='container'>
          <h1 className='font-semibold text-4xl'>Posts</h1>
        </div>
      </header>

      <main className='main'>
        <div className='container'>
          <PostForm onAddPost={handleAddPost} />
          <PostList posts={posts} />
        </div>
      </main>
    </div>
  );
}
