export  default {
    Query: {
        allPersons: async(parent, args, { Person }) => {
            const persons = await Person.find()
            return persons.map(x => {
                x._id = x._id.toString()
                return x
            })
        }
    }
}