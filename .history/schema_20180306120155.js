export default `
    type Person {
        _id: String
        firstName: String
        lastName: String
        nickName: String
        birth: Int
        nationality: String
    }
    type Query {
        allPersons: [Person!]!
    }
    type Mutation {
        createPerson
        (
            firstName: String
            lastName: String
            nickName: String
            birth: String
            nationality: String

        ): Person!
    }
    `
