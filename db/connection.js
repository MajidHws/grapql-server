const mongoose = require('mongoose')

const dbName = 'graphqlServer'
const dbURI = `mongodb://127.0.0.1:27017/${dbName}`

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => {
    console.log('DB CONNECTED')
})