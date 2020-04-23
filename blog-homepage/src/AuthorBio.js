import React from 'react';
import PropTypes from 'prop-types';

  class AuthorBio extends React.Component {
    static propTypes = {
      author: PropTypes.object
    }

    render() {
      const author = Object.values(this.props);
      return (

              <div>
                <img src={author.map((info, i) => info.image)} alt='' />
                {author.map((info, i) => <p key={i}>{info.name}</p>)}
              </div>
          );
      }
  }
export default AuthorBio;


