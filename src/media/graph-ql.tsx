import graphQLPoster from '../img/GraphQLPoster.jpg';

const GraphQLVideo = (): React.ReactNode => {
  const id = 'graph-ql';
  const mediaSrc = 'https://amiekuttruff-media.s3.us-west-2.amazonaws.com/GraphQL.mp4'

  return (
    <video
      id={id}
      src={mediaSrc}
      controls
      width="100%"
      poster={graphQLPoster}
      muted={true}
      playsInline={true}
      loop
      aria-label="GraphQL video presentation">
    </video>
  );
};

export default GraphQLVideo;
