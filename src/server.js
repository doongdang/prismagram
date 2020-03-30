import "./env"
import {
  GraphQLServer
} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport"
import passport from "passport"

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema
});

server.express.use(logger("dev"));


server.start({
    port: PORT
  },
  () => console.log(`✅Server Runnig on https://localhost:${PORT}`)
);