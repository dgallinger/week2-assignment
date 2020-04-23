import React from 'react';
import './App.css';
import ArticleInfo from './ArticleInfo.js';
import MissedArticles from './MissedArticles';

function App() {
  return (
      <div>
      <div className='Article-title'>For You
        <ArticleInfo />
      </div>
      <div className='Article-title'>In Case You Missed It
        <MissedArticles />
      </div>
    </div>
  );
}

export default App;
