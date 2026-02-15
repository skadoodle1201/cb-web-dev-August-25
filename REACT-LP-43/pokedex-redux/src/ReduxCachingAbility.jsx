import Loading from "./Loading";
import Error from "./Error";
import { useGetLocationNamesQuery } from "./poke-api";

function ReduxUseToCallAPI() {
  const { data, error, isLoading } = useGetLocationNamesQuery();

  return (
    <>
      <h1>Pokemon Locations By Redux</h1>
      <ol>
        {error ? (
          <Error />
        ) : isLoading ? (
          <Loading />
        ) : (
          data.results.map((location, index) => {
            return <li key={index}> {location.name}</li>;
          })
        )}
      </ol>
    </>
  );
}

export default ReduxUseToCallAPI;
