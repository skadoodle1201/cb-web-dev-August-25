import { useState } from "react";

import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

const TODO_QUERY = gql`
  query GetLatestTodos {
    getTodos {
      title
      id
      user {
        name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(TODO_QUERY);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <ol>
        {data &&
          data.getTodos.map((element) => {
            return (
              <li>
                {element.title} By {element.user.name}
              </li>
            );
          })}
      </ol>
    </>
  );
}

export default App;
