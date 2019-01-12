import React from 'react';

function ClojureTalk() {
  const id = 'clojure-west';
  const mediaSrc = 'https://youtu.be/SOIhncWcCjA';
  const imageSrc = 'img/ClojureWestPoster.jpg';

  return (
    <a href={mediaSrc} target="_blank" rel="noopener noreferrer">
      <img id={id}
           src={imageSrc}
           alt='ClojureWest Conference Poster'
           height='auto'
           width="80%" />
    </a>
  )
}

function GraphQLTalk() {
  const id = 'graph-ql';
  const mediaSrc = 'https://s3-us-west-2.amazonaws.com/akuttruff-media/GraphQL.mp4';
  const imageSrc = 'img/GraphQLPoster.jpg';

  return (
    <video
      id={id}
      src={mediaSrc}
      controls
      width="80%"
      poster={imageSrc}>
    </video>
  );
}

export { ClojureTalk, GraphQLTalk };