const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/notes.model")

connectToDB();

const app = express(); // creat

app.use(express.json());



app.post("/notes", async (req, res)=>{

  const {title, content} = req.body;

  await noteModel.create({
    title, content
  })

  res.json({
    message:"notes created"
  })

})

app.get("/notes", async(req, res)=>{

  const notes = await noteModel.find()

  res.json({
      notes : notes
  })



})


app.delete("/notes/:id", async (req, res)=>{
  const noteId = req.params.id;
  
  await noteModel.findOneAndDelete({
    _id : noteId
  })

  res.json({
    message : "note deleted successfully"
  })

})


app.patch("/notes/:id", async(req, res)=>{
        const noteId = req.params.id
        const {title} = req.body

        await noteModel.findOneAndUpdate({
          _id : noteId
        },{
            title: title
        })

        res.json({
          message : "updated"
        })
})



app.listen(3000, () => {
  // start
  console.log("server us created !!! ");
});
