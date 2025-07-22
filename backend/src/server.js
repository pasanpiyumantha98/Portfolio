import express from 'express';
import cors from 'cors';


const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/name', (req,res)=>{

    res.send('Pasan Piyumantha');

})


app.listen(9000,()=>{

    console.log("App is listening on 9000")
})