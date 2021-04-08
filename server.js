const express =require('express')
const bodyParser = require('body-parser')
const path =require('path')
const api = require('./backend/routes/api')

const port = process.env.port ||3000;
const app = express();
const corse =require('cors');
app.use(express.static(path.join(__dirname,'dist')) )

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(corse());
app.use('/api',api);

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

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
})

app.listen(port ,function(){
  console.log('server is running on '+ port)
})
