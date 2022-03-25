const express = require('express'); 
const todosRoutes = require('./routes/todos')
// require db
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./formulaire')); 

app.use('/api/v1/todos', todosRoutes )


const port = process.env.PORT || 3600;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> console.log('app listening'))
    } catch (error) {
        console.log(error)
    }
}

start()