const express=require("express");
const app=express();
const path=require("path");
const methodOverride =require("method-override");
const {v4:uuid}=require('uuid');


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the "public" directory
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')

let comments=[
   { 
      id:uuid(),
      username:'us3ite',
      comment:'lol that is so funny!'
   },
   {
      id:uuid(),
      username:'tdays',
      comment:'I Like to travelling with my friends'
   },
   {
      id:uuid(),
      username:'skyler',
      comment:'please give your feedback'
   },
   {
      id:uuid(),
      username:'Todd',
      comment:'Woof woof woof'
   }

]
// READ that is the part of the CRUD.
app.get('/comments',(req,res) =>{
   // const username="Rakesh01";
   res.render('comments/index',{comments})
})


//New

app.get('/comments/new', (req,res)=>{
   res.render('comments/new');
})

// CREATE
app.post('/comments',(req,res)=>{
   const {username,comment}=req.body;
   comments.push({username,comment,id:uuid() })
   // res.send("Your Comment is Submitted!");
   res.redirect( "/comments");
})


// Show:- Details for one Specific id or comment
// when we use the uuid then we don't use the parseInt beacuse it doesnot give the integer  id anymore after using the uuid.
app.get('/comments/:id',(req,res) =>{
   const{id}=req.params;
   const comment=comments.find(c => c.id === id);
   res.render('comments/show',{comment});
})
// edit
app.get('/comments/:id/edit',(req,res) =>{
   const{id}=req.params;
   const comment=comments.find(c => c.id === id);
   res.render('comments/edit', {comment})
})


// update the one comments 
app.patch("/comments/:id",(req,res) =>{
   const{id}=req.params;
   const newCommentText=req.body.comment;
   const foundComment=comments.find(c => c.id ===id);
   foundComment.comment =newCommentText;
   res.redirect('/comments')

   // console.log(req.body.comment)
   // res.send("ALL GOOD!");
   // const comment=comments.find(c => c.id ===id);
   // res.send('UPDATING SOMETHING')
})

// delete
app.delete('/comments/:id',(req,res) =>{
   const{id}=req.params;
   comments=comments.filter(c => c.id !==id);
   res.redirect('/comments');

})

app.get("/tacos",(req,res) =>{
   res.send("GET/ tacos Response is Working ");
})

app.post("/tacos", (req,res) =>{
   const {meat,qty}=req.body;
   // console.log(req.body);
   res.send(`OK, here are your ${meat} ${qty} tacos`);
})

const port=4000;
app.listen(port, () =>{
   console.log(`The Server Running on Port ${port}`);
})


