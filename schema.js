const { gql } = require('apollo-server');


exports.typeDefs = gql`
    type Query{
        trips: [Trip!]!
        blogs: [Blog!]!
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
    type Blog {
    id: ID!,
    title: String!,
    date: String!,
    small: String!,
    body: String!,
    author: String!,
    read: String!,
    value: Int!,
  }

`