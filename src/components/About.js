import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  console.log("image (from About component): ");
  console.log(image);

  console.log("about (from About component): ");
  console.log(about);

  return (
    <aside>
      <img alt="blog logo" src={image} />
      <p>{about}</p>
    </aside>
  );
}

export default About;
