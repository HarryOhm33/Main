const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const jammu = require("./jammu");
const kashmir = require("./kashmir");
const districts = jammu.concat(kashmir);

// app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home.ejs", { jammu, kashmir });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/Products&Districts", (req, res) => {
  res.render("p&d.ejs", { districts, jammu, kashmir });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/login/forget_pass", (req, res) => {
  res.render("forget.ejs");
});

app.get("/:district", (req, res) => {
  let { district } = req.params;
  let districtInfo = districts.find((d) => district === d.name);
  res.render("district.ejs", { districtInfo });
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
