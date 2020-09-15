const express = require('express');
const bodyParser = require('body-parser');
const app =express();
const port = process.env.PORT || 5000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([{
        'id':1,
        'image':'https://placeimg.com/64/64/1',
        'name': '이름1',
        'birth': '123111',
        'gender':'F'
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/2',
        'name': '이름2',
        'birth': '32134234',
        'gender':'F'
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/3',
        'name': '이름3',
        'birth': '123234111',
        'gender':'F'
      }]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));