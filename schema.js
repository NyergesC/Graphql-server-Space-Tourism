const { gql } = require('apollo-server');


exports.typeDefs = gql`
    type Query{
        trips: [Trip!]!
        trip(id:ID!): Trip
        blogs: [Blog!]!
        blog(id: ID!): Blog
        tripCategories: [TripCategory!]!
        tripCategory(id:ID!): TripCategory
        users: [User!]!
        user(id: ID!): User
        reviews: [Review!]!
        review(id: ID!): Review
    }

    type Trip {
    id: ID!,
    destination: String!,
    description: String!,
    distance: String!,
    duration: String!,
    src: String!,
    alt: String!,
    tripCategory: TripCategory
    reviews:[Review!]!
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

    type TripCategory {
      id: ID!
      name: String!
      trips: [Trip!]!
  }

    type User {
    id: ID!
    name: String!
    email: String!
    age:Int!

  }
    type Review {
    id: ID!
    date:String!
    comment: String!
    text:String!
    rating: Int!
  }

`