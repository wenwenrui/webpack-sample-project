const {buildSchema} = require('graphql')
const schema = buildSchema(`
  input UserInput {
    username: String
    age: Int
  }
  type User {
    id: ID
    username: String
    password: String
    age: Int
  }
  type Query {
    hero: String
    getUser(username: String, password: String): String
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
        password: '123456',
        age: 12
    },
    {
        id: '2',
        username: 'rui',
        password: '123456',
        age: 12
    }
]
const root  = {
    hero () {
        return 'I am iron man'
    },
    getUser ({username, password}) {
      let Message = 'fail'
      if(user.some(item => item.username === username))
      {
        Message = user.find(item => item.username === username).password === password ? 'success' : Message
      }
      return Message
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
