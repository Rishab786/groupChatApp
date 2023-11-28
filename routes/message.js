const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
//heree get to post
router.post('/message',(req,res,next)=>{
    
    let Name = req.body.name +": ";;
    fs.appendFileSync('data.txt',Name);
     res.sendFile(path.join(__dirname,'../','views','message.html'))
});

module.exports = router;