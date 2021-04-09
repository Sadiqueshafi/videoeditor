const express =require('express');
const router = express.Router();
const mongoose = require('mongoose');
const videos = require('../models/videos');

const db ='mongodb://jachghar:jachghar@cluster0-shard-00-00.l08tx.mongodb.net:27017,cluster0-shard-00-01.l08tx.mongodb.net:27017,cluster0-shard-00-02.l08tx.mongodb.net:27017/videoplayer?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
// const db ='mongodb://localhost:27017/myapp'
mongoose.Promise = global.Promise
mongoose.connect(db,{ useNewUrlParser: true },(err)=>{
  if (error){
    console.log("Error"+error)
  }
})

exports.playervideos = router.get('/videos',(req,res)=>{
  console.log('getting all videos from database');
  const video =videos.find();
        video.then(document =>{
      res.status(200).json({
      message:'videos message fetch successfully',
      video:document
  })
})

})
exports.playervideo = router.get('/videos/:id',(req,res)=>{
  console.log('getting single vide by id');
  const video =videos.findById(req.params.id);
        video.then(document =>{
      res.status(200).json({
      message:'videos message fetch successfully',
      video:document
  })
})

// async function createvide(){
//   const video = new videos({
//     title:req.body.title,
//     url:req.body.title,
//     description:req.body.description
//   })
//   const result = await video.save();
//   console.log(result);
// }

  router.post('/video',(req,res)=>{
    console.log("post a video")
  let newVideo = new videos()
  newVideo.title = req.body.title;
  newVideo.url =req.body.url;
  newVideo.description=req.body.description

  console.log(newVideo)
  newVideo.save((err,inservideo)=>{
    if(err){
      console.log("Error saving video")
    }else{
      res.json(inservideo)
    }
  })

})
})


router.put('/video/:id',(req,res)=>{
  console.log('updateing videos');
  videos.findByIdAndUpdate(req.params.id,{
    $set:{title:req.body.title,url:req.body.url,description:req.body.description}
  },
  {new:true},
  function(err,updatevideo){
    if(err){
      res.send('erroe in updating videos')
    }else{
      res.json(updatevideo)
    }
  })
})

router.delete('videos/:id',function(req,res){
  console.log('Deleting a videos')
  videos.findByIdAndRemove(req.params.id,(err,deletingvideo)=>{
    if(err){
      res.send("Error in deleting videos ")

    }else{
      res.json(deletingvideo)
    }
  })
})
module.exports = router
