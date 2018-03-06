export default {
    Query: {
        allPersons: async(parent, args, { Person }) => {
            const persons = await Person.find()
            return persons.map(x => {
                x._id = x._id.toString()
                return x
            })
        },
        getPerson: async (parent, { id }, { parent }){
            const person = await Person.findById(id)
            return person
        }
    },
    Mutation: {
        createPerson: async(parent, args, { Person }) => {
            const person = await new Person(args).save()
            person._id = person._id.toString()
            return person
        },
        changeNickName: async (parent, {id, NickName }, { Person }) => {
            const newPerson = await Person.findById(id)
            newPerson.set({
                NickName
            })
            await newPerson.save()
            return newPerson
        }
    }
}