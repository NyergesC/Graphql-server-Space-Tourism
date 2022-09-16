const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Trip } = require("./resolvers/Trip");
const { TripCategory } = require("./resolvers/TripCategory")
const { db } = require("./db");



const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        TripCategory,
        Trip
    },

    context: {
        db,
      },
    
  });
  
  server.listen().then(({ url }) => {
    console.log("Server is up at " + url);
  });