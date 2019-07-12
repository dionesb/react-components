import React from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

import profile from './assets/profile.jpg';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
