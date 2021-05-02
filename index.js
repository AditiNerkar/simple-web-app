// Imports
const { urlencoded } = require('express');
const express = require('express')

//configs
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let USERS = [];
// logic
app.get('/',(request, response)=>{     //default route like localhost
    console.log("got a request");
    response.send("Hello World");

});
app.get('/echo/:msg',(req,res)=>{
    res.send(req.params.msg);
});

app.post('/echo', (req,res)=>{
    res.send(req.body);
});

//CRUD operations
app.get('/user/',(req,res)=>{      //READ
    res.send(USERS);
});

app.post('/user',(req,res)=>{      //CREATE
    let user = {
        name : req.body.name,
        role : req.body.role,
    };
    USERS.push(user);
    res.send("User added!")
});
app.put('/user',(req,res)=>{        //UPDATE
    //app.enable(USERS);
    user = {
        name : req.body.name,
        role : req.body.role,
    };
    USERS.push(user);
    res.send("New User added");
});
app.delete('/user',(_,res)=>{       //DELETE
    USERS.pop(0,1);
    //USERS.splice(0,1);
    res.send("Deleted existing user");
})

app.listen(port, ()=>{
    console.log(`App is listening at: http://localhost:${port}`);
});