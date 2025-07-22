import express from 'express'

const app = express()

app.use(express.json())




app.get('/', (req, res) => {
  res.send('Hello World!');
});






app.listen(9000,()=>{

    console.log("App is listening on 9000")
})