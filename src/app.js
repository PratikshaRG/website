const express = require("express");
const path = require("path");
const mongodb = require("./db/db");
const Contact = require("./models/contact");
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const { request } = require("http");
const PORT = process.env.PORT || 5000;
const app = express();

mongodb();

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", templates_path);
app.set("view engine", "hbs");

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/skill", (req, res) => {
  res.render("skill");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/abc", (req, res) => {
  res.render("abc");
});

app.post("/contact", async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.number,
      message: req.body.msg,
    });

    await contact.save();
    res.status(201).render("abc");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log(`Port is running at ${PORT}`);
});

