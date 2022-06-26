import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
  console.log("________________________________");
  console.log("title (from Article component): ");
  console.log(title);

  console.log("date (from Article component): ");
  console.log(date);

  console.log("preview (from Article component): ");
  console.log(preview);
  console.log("________________________________");

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
