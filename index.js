//what is a restful API
// using http protocols to do transactions with a backend
// using get,post,put, and delete calls to the backend
//interacting with endpoints
//use get to pull data from backend
//use post add new data
// put updates data
// delete to delete data (duh)
import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/routes';
const app = express();
const port = 4000;
// mongoose // connection
/*
const connectDB = async () => {
    mongoose.Promise = global.Promise;
    try{
        await mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology:true
    });
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
connectDB();*/
//mongoose.Promise = global.Promise;




//bodyParser
app.use(express.json({extended : true}));
//app.use(express.json());
routes(app);
app.get('/', (req, res) => {
    //sending a message;
    res.send("Node and express running on port");
});

app.listen(port, () => {
    console.log(`server listening on PORT ${port}`);
});

