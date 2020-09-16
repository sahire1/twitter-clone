const express=require('express');
const cors=require('cors');
const monk=require('monk');
const app=express();
const Filter=require('bad-words');
const filter=new Filter();
const db=monk('localhost/meower');
const mews=db.get('mews');
const rateLimit=require("express-rate-limit");

//if db doesnt exist this will create it or if connection doesnt exists this will again create it
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
res.json({
    message:'Meower ! '
});
});

app.get('/mews',(req,res)=>{
 mew
 .find()
 .then(mews =>{
    res.json(mews);
 });
});
function isValidMew(mew)
{
return mew.name && mew.name.toString().trim() !=='' &&
mew.content && mew.content.toString().trim() !=='';
}
app.post('/mews',(req,res)=>{
    if(isValidMew(res.body))
    {
        const mew={
        name: filter.clean(req.body.name.toString()),
        content:filter.clean(req.body.content.toString()),
        created:new Date()

        }
        mews.insert(mew).then(createdMew =>{
            res.json(createdMew);
        });


    }else{
        res.status(422);
        res.json({
            message:"Hey! Name and content are required"
        })
           
        
    }
   
    
})
app.listen(5000,() =>{
    console.log('Listening on https://localhost:5000');
})