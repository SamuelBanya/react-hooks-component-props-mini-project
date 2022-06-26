import React from "react";
import Article from "./Article.js";

function ArticleList({ articleArray }) {
  console.log("articleArray from ArticleList component: ");
  console.log(articleArray);

  let processArticles = [];

  if (articleArray && articleArray.map) {
    processArticles = articleArray.map((article) => {
      // Rip the values of 'title', 'date', and 'preview'
      return (
        <Article
          key={article["id"]}
          title={article["title"]}
          date={article["date"]}
          preview={article["preview"]}
        />
      );
    });
  }

  return <main>{processArticles}</main>;
}

export default ArticleList;
