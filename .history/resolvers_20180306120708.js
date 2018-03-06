export  default {
    Query: {
        allPersons: async(parent, args, { Person }) => {
            const persons = await Person.find()
        }
    }
}