import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    return (
      <main>
        {props.articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </main>
    );
  };

export default ArticleList;
