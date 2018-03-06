faustino [12 h 35]
a ajouté cet extrait SQL: schema.js 
export default `
  type Person {
    _id: String
    firstName: String!
    lastName: String!
    nickName: String
    birth: Int
    nationality: String
  }
  type Query {
    allPersons: [Person!]!
  }
  type Mutation {
    createPerson(firstName: String!, 
      lastName: String!, 
      nickName: String,
      birth: Int,
      nationality: String
    ): Person!
  }
`
Réduire 

faustino [13 h 02]
a ajouté cet extrait SQL: Untitled 
export default {
  Query: {
    allPersons: async (parent, args, { Person }) => {
      const persons = await Person.find()
      return persons.map(x => {
        x._id = x._id.toString()
        return x
      })
    },
    getPerson: async (parent, { id }, { Person })=> {
      const person = await Person.findById(id)
      person._id = person._id.toString()
      return person
    }
  },
  Mutation: {
    createPerson: async (parent, args, { Person }) => {
      const person = await new Person(args).save()
      person._id = person._id.toString()
      return person
    },
    changeNickName: async (parent, {id, nickName}, { Person }) => {
      const newPerson = await Person.findById(id)
      newPerson.set({
        nickName
      })
      await newPerson.save()
      return newPerson
    }
  }
}