import React from 'react';
import missedArticles from './data/missed-articles.json';
import AuthorBio from './AuthorBio.js';

class MissedArticles extends React.Component {

  render() {

    function formatDate(string) {
      return new Date(string).toLocaleDateString();
    }

    return (
      <div className="grid-container">
        {missedArticles.map((article, i) => {
          return (
            <div className="grid-item" key={i}>
              <img src={article.image} alt='' height='250' width='250'/>
              <p className="Article-title">{article.title}<br></br>{article.description}</p>
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
export default MissedArticles;
