const { gql } = require('apollo-server');


exports.typeDefs = gql`
    type Query{
        trips: [Trip!]!
    }

    type Trip {
    id: ID!,
    destination: String!,
    description: String!,
    distance: String!,
    duration: String!,
    src: String!,
    alt: String!,
  }

`