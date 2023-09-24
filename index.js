const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "districts",
  password: "Sql@2006",
});

// app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  try {
    connection.query("SELECT * FROM districts", (err, result) => {
      if (err) throw err;
      let dist = result;

      function Jammu() {
        let jName = [];
        for (let i = 0; i < 10; i++) {
          jInfo = dist[i];
          jName.push(jInfo);
        }
        return jName;
      }

      let jammu = Jammu();

      function Kashmir() {
        let kName = [];
        for (let i = 10; i < 20; i++) {
          kInfo = dist[i];
          kName.push(kInfo);
        }
        return kName;
      }

      let kashmir = Kashmir();

      let districts = jammu.concat(kashmir);

      res.render("home.ejs", { jammu, kashmir });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/Products&Districts", (req, res) => {
  try {
    connection.query("SELECT * FROM districts", (err, result) => {
      if (err) throw err;
      let dist = result;

      function Jammu() {
        let jName = [];
        for (let i = 0; i < 10; i++) {
          jInfo = dist[i];
          jName.push(jInfo);
        }
        return jName;
      }

      let jammu = Jammu();

      function Kashmir() {
        let kName = [];
        for (let i = 10; i < 20; i++) {
          kInfo = dist[i];
          kName.push(kInfo);
        }
        return kName;
      }

      let kashmir = Kashmir();

      let districts = jammu.concat(kashmir);

      res.render("p&d.ejs", { districts, jammu, kashmir });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/login/forget_pass", (req, res) => {
  res.render("forget.ejs");
});

app.get("/login/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/:district", (req, res) => {
  try {
    connection.query("SELECT * FROM districts", (err, result) => {
      if (err) throw err;
      let districts = result;

      function Jammu() {
        let jName = [];
        for (let i = 0; i < 10; i++) {
          jInfo = districts[i];
          jName.push(jInfo);
        }
        return jName;
      }

      let jammu = Jammu();

      function Kashmir() {
        let kName = [];
        for (let i = 10; i < 19; i++) {
          kInfo = districts[i];
          kName.push(kInfo);
        }
        return kName;
      }

      let kashmir = Kashmir();

      let dist = jammu.concat(kashmir);

      let districtName = req.params["district"];
      let districtInfo = districts.find((d) => d.name === districtName);
      res.render("district.ejs", { districtInfo });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/:district/product", (req, res) => {
  try {
    connection.query("SELECT * FROM districts", (err, result) => {
      if (err) throw err;
      let dist = result;

      function Jammu() {
        let jName = [];
        for (let i = 0; i < 10; i++) {
          jInfo = dist[i];
          jName.push(jInfo);
        }
        return jName;
      }

      let jammu = Jammu();

      function Kashmir() {
        let kName = [];
        for (let i = 10; i < 19; i++) {
          kInfo = dist[i];
          kName.push(kInfo);
        }
        return kName;
      }

      let kashmir = Kashmir();

      let districts = jammu.concat(kashmir);

      let districtName = req.params["district"];
      let districtInfo = districts.find((d) => d.name === districtName);
      res.render("product1.ejs", { districtInfo });
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
