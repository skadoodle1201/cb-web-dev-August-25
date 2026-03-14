import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import { gql } from "graphql-tag";
import axios from "axios";
import cors from "cors";
const customData = [];

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: gql`
      type Custom {
        name: String
      }

      type Todo {
        id: ID!
        title: String!
        body: String
        userId: ID!
        user: User
      }

      type User {
        id: ID!
        name: String
        username: String
        email: String
      }

      type Query {
        getTodos: [Todo]
        getUsers: [User]
      }

      type Mutation {
        addCustomData(name: String): [Custom]
      }
    `,
    resolvers: {
      Query: {
        getTodos: async () => {
          return (await axios.get("https://jsonplaceholder.typicode.com/posts"))
            .data;
        },

        getUsers: async () => {
          return (await axios.get("https://jsonplaceholder.typicode.com/users"))
            .data;
        },
      },
      Todo: {
        user: async (todo) => {
          const userDetails = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${todo.userId}`,
          );
          return userDetails.data;
        },
      },
      Mutation: {
        addCustomData: (_, { name }) => {
          customData.push({ name: name });
          return customData;
        },
      },
    },
  });

  await server.start();
  app.use(express.json());
  app.use(cors());
  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => {
    console.log("Listening on PORT 4000 http://localhost:4000");
  });
}

startServer();
