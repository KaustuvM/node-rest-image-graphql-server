/*

 */
const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type Fruit {
        id: ID! 
        title: String
        headline: String
        image: String
        gradientColors: [String]
        description: String
        sectionHeaders: [String]
        sectionContents: [String]
        nutrition: [String]
    }

    type Query {
        fruits: [Fruit],
        fruit(id: ID!): Fruit
    }
`

module.exports = typeDefs