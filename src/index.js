const express = require('express');
const app = express();
const userRouter = require("./routes/userRoutes");
const sudarshan = require('./db');
const cors=require('cors');
app.use(express.json());
app.use(cors());
const PORT = 8000;
app.use("/user",userRouter);

app.get('/', function(req, res){
   res.send(("Hello sudarshan"));
});

app.listen((PORT),async()=>{
  await sudarshan()
  console.log(`Listening on http://localhost:${PORT}`);
});