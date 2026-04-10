import clojureWestPoster from '../img/ClojureWestPoster.jpg';

const ClojureVideo = (): React.ReactNode => {
  const id = 'clojure-west';
  const mediaSrc = 'https://youtu.be/SOIhncWcCjA';

  return (
    <a href={mediaSrc} target="_blank" rel="noopener noreferrer">
      <img
        id={id}
        src={clojureWestPoster}
        alt="ClojureWest Conference Poster"
        height="auto"
        width="100%"
      />
    </a>
  );
};

export default ClojureVideo;
