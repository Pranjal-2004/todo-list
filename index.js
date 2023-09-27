import express from "express";
import bodyParser from "body-parser";
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";

// const __dirname= dirname(fileURLToPath(import.meta.url));
const app= express();
const port=3000;
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname,'public')));
var additems=[];

app.get('/',(req,res)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let currday= today.toLocaleDateString("en-US", options);
    res.render('index.ejs',{todaysday: currday,allitems: additems});
});

app.post('/',(req,res)=>{
    let newitem= req.body.itemadded;
    additems.push(newitem);
    res.redirect('/');
});

app.listen(port,()=>{
    console.log(`port  is running at server ${port}`);
});



