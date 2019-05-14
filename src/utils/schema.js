const {buildSchema} = require('graphql')
const schema = buildSchema(`
  input UserInput {
    username: String
    age: Int
  }
  type User {
    id: ID
    username: String
    age: Int
  }
  type Query {
    hero: String
    getUser(id: ID!): User
    getAllUser: [User]
  }
  type Mutation {
    creatUser(input: UserInput): [User]
    UpdateUser(id: ID!, input: UserInput): User
  }
`)

const user = [
    {
        id: '1',
        username: 'wen',
        age: 12
    },
    {
        id: '2',
        username: 'wen',
        age: 12
    }
]
const root  = {
    hero () {
        return 'I am iron man'
    },
    getUser ({id}) {
        return user.find(item => item.id === id)
    },
    getAllUser () {
        return user
    },
    creatUser ({input}) {
        user.push({...input,id: `${parseInt(user[user.length-1].id) + 1}`})
        return user
    },
    UpdateUser ({id, input}){
        return user.some(item => item.id === id)?
        Object.assign(user.find(item => item.id === id), input) : null
    }
}

module.exports = {
    schema,
    root
}
