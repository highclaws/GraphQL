export default {
    Query: {
        allPersons: async(parent, args, { Person }) => {
            const persons = await Person.find()
            return persons.map(x => {
                x._id = x._id.toString()
                return x
            })
        }
    },
    Mutation: {
        createPerson: async(parent, args, { Person }) => {
            const person = await new Person(args).save()
            perso._id = person._id.toString()
            return person
        }
    }
}