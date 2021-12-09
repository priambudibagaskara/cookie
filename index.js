const app = require("express")();
var cors = require("cors");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.post("/", (req, res) => {
  const cookie = req.headers.cookie;
  if (cookie) res.sendFile(`${__dirname}/cookie.png`);
  else {
    res.sendStatus(403);
    res.end();
  }
});
app.post("/login", (req, res) => {
  // const cookie = "SID=123456; samesite=strict; secure";
  const cookie = "SID=123456; samesite=lax; secure";
  // const cookie = "SID=123456; samesite=none; secure";

  res.setHeader("set-cookie", [cookie]);
  res.send("ok");
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/img", (req, res) => {
  const cookie = req.headers.cookie;
  if (cookie) res.sendFile(`${__dirname}/cookie.png`);
  else {
    res.sendStatus(403);
    res.end();
  }
});

app.get("/redirect-img", (req, res) => {
//   res.redirect("/img");
  res.sendFile(`${__dirname}/redirect.html`);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
