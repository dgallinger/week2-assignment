import React from 'react';
import yourArticles from './data/your-articles.json';
import AuthorBio from './AuthorBio.js';

class ArticleInfo extends React.Component {

  render() {

    function formatDate(string) {
      return new Date(string).toLocaleDateString();
    }

    return (
      <div className="grid-container">
        {yourArticles.map((article, i) => {
          return (
            <div className="grid-item" key={i}>
              <img src={article.image} alt='' height='250' width='250'/>
              <p>{article.title}<br></br>{article.description}</p>
              <AuthorBio author={article.author} />
              <p>{formatDate(article.postedDate)}</p>
              <p>{article.minutesToRead} min read</p>
              <p>{article.hasAudioAvailable ? 'Has audio available' : ''}</p>
              <p>{article.memberPreview ? 'Member Preview' : ''}</p>
            </div>
          );
        })
      }
      </div>
    );
  }
}
export default ArticleInfo;
