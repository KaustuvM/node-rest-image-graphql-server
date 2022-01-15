/*

 */

const fruits = require('../data/data')

const resolvers = {
    Query: {
        fruits: () => fruits,
        fruit: (_, { id }, context, info) => fruits.find(fruit => fruit.id == id)
    }
}


module.exports = resolvers