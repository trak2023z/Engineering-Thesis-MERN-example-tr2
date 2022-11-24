const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://admin:admin@mern-cluster.sai31e8.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}