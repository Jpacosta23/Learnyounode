const fs = require('fs');
const path=require('path');
const folder=process.argv[2];
const ext=process.argv[3];

// console.log(ext);

fs.readdir(folder,(err,list)=>{
    if(err)return
    // console.log(list)
    list.forEach(element => {
        const arr=path.extname(element);
        if(arr===`.${ext}`){
            console.log(element);
        }
    });
});
