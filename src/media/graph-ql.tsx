import React from 'react';
import graphQLPoster from '../img/GraphQLPoster.jpg';

interface GraphQLVideoProps {}

const GraphQLVideo = (): React.ReactNode => {
  const id = 'graph-ql';
  const mediaSrc = 'https://s3-us-west-2.amazonaws.com/akuttruff-media/GraphQL.mp4';

  return (
    <video
      id={id}
      src={mediaSrc}
      controls
      width="100%"
      poster={graphQLPoster}
      aria-label="GraphQL video presentation">
      <track kind="captions" />
    </video>
  );
};

export default GraphQLVideo;
