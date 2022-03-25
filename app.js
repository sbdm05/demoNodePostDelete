const express = require('express'); 
const todosRoutes = require('./routes/todos')
// require db
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express(); 

app.use(express.json());

app.use(express.static('./formulaire')); 

app.use('/api/v1/todos', todosRoutes )


// app.listen(3300);

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3300, ()=> console.log('app listening'))
    } catch (error) {
        console.log(error)
    }
}

start()