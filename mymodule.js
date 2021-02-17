const fs =require('fs');
const path=require('path');
const dir=process.argv[2];
const ext=process.argv[3];

module.exports=function (dir,ext,callback){
    fs.readdir(dir,(err,list)=>{
        if(err)return 
    })
}