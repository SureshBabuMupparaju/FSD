const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/WebApplication')
.then(()=>console.log('Database is connected'))
.catch(()=>console.log('Database is not Connected'))