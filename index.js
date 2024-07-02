const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

let data = [
    
    {id: 1, email: 'robert@hotmail.com', name: 'Robert A/L Francis'},
    {id: 2, email: 'balugov@gmail.com', name: 'Balu Govindsamy'},
    {id: 3, email: 'teohminkee@inglab.com', name: 'Teoh Min Kee'},
    {id: 4, email: 'sebastian@hyped.com.my', name: 'A Sebastian A/L Anthony'},
    {id: 5, email: 'chonghowkee@yahoo.com', name: 'Chong How Kee'},

]

app.get('/', (req,res) =>{

    const status = {
        "Status" : "Running",
        "Message" : "Contacts Retrieved",
        "contacts": data,
    };

    res.send(status);
});

app.listen(PORT, ()=>{
    console.log("Server Listening on PORT:", PORT);

});