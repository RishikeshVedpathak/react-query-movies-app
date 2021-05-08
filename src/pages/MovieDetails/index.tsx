import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const routeParams = useParams();

  return <div>Movie - {JSON.stringify(routeParams)}</div>;
};

export default MovieDetails;
