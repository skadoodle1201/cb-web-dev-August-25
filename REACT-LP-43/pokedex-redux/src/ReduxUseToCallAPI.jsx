import Loading from "./Loading";
import Error from "./Error";
import { useGetLocationListByLimitQuery } from "./poke-api";
import { useState } from "react";

function ReduxCachingAPI() {
  const [limit, setLimit] = useState(2);
  const { data, error, isLoading } = useGetLocationListByLimitQuery(limit);

  return (
    <>
      <h1>Pokemon Locations By Redux Caching</h1>
      <div>
        <button onClick={() => setLimit(5)}>Get First 5</button>
        <button onClick={() => setLimit(50)}>Get First 50</button>
        <button onClick={() => setLimit(100)}>Get First 100</button>
      </div>
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

export default ReduxCachingAPI;
