import './App.css';
import { Posts } from '@/components/Posts';

export function App() {
  return (
    <div className='app'>
      {/* HEADER */}
      <header className='header'>
        <div className='container'>
          <h1 className='font-semibold text-4xl'>Posts</h1>
        </div>
      </header>

      {/* MAIN */}
      <main className='main'>
        <div className='container'>
          <Posts />
        </div>
      </main>
    </div>
  );
}
