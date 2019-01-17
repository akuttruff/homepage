import React from 'react';
import clojureWestPoster from '../img/ClojureWestPoster.jpg';
import graphQLPoster from '../img/GraphQLPoster.jpg';

function ClojureTalk() {
  const id = 'clojure-west';
  const mediaSrc = 'https://youtu.be/SOIhncWcCjA';

  return (
    <a href={mediaSrc} target="_blank" rel="noopener noreferrer">
      <img id={id}
           src={clojureWestPoster}
           alt='ClojureWest Conference Poster'
           height='auto'
           width="80%" />
    </a>
  )
}

function GraphQLTalk() {
  const id = 'graph-ql';
  const mediaSrc = 'https://s3-us-west-2.amazonaws.com/akuttruff-media/GraphQL.mp4';

  return (
    <video
      id={id}
      src={mediaSrc}
      controls
      width="80%"
      poster={graphQLPoster}>
    </video>
  );
}

export { ClojureTalk, GraphQLTalk };