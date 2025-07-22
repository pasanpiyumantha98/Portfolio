import express from 'express';
import cors from 'cors';
import { connectDB } from '../config/db';


const app = express()

app.use(express.json())
app.use(cors())

const db = connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/name', (req,res)=>{

    res.send('Pasan Piyumantha');

})

app.post('/api/contactform', (req,res)=>{

    const name = req.body.name
    const email = req.body.email
    const msg = req.body.msg



})


app.listen(9000,()=>{

    console.log("App is listening on 9000")
})