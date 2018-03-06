const mongoose =  require('mongoose')

export const Person = mongoose.model('Person', {
    firstname: String,
    lastName: String,
    nickName: String,
    birth: Date,
    nationality: String
})