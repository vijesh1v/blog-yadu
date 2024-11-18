import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about",(req,res)=>{
  res.render("about.ejs")
})

app.get("/contact",(req,res)=>{
  res.render("contact.ejs")
})

app.get("/team",(req,res)=>{
  res.render("team.ejs")
})

app.get("/blog", (req, res) => {
  res.render("blog.ejs")  
})

app.post("/submit", (req, res) => {
  console.log(req.body)
  const blogHeading = req.body["name"]
  const blogContent = req.body["text"]
  console.log(blogContent)
  res.render("blog.ejs",{heading : blogHeading, content : blogContent})
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
