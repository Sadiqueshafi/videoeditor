const express =require('express')
const bodyParser = require('body-parser')
const path =require('path')
const api = require('./backend/routes/api')

const port = process.env.port ||3000;
const app = express();
const corse =require('cors');
app.use(express.static(path.join(__dirname,'dist')) )
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(corse());
app.use('/api',api);
// const videos = require('./backend/models/videos');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept ');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Expose-Headers', "x-auth-token");
    //
    if(req.url && req.url.includes('perfios')){
      res.setHeader('Content-Type','application/json');
    }
    next();
  });

// app.post('/api/addvideo',(req,res)=>{
//   const video = new videos({
//     title:req.body.title,
//     url:req.body.url,
//     description:req.body.description
//   })
//   const result =  video.save();
//   console.log(result);
// })

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
})

app.listen(process.env.PORT||500 )
