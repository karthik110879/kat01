const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/taskmanager', { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false  })
    .then(()=> console.log('database is connected'))
    .catch((error)=> console.log(error));


module.exports = mongoose;