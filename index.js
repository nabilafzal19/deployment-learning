const express = require("express");

const PORT = 4000;

const app = express();

app.get("/deployed", (req, res) => {
  res.send("successfully deployed for ci cd with ec2...CHANGES");
});

app.listen(PORT, () => {
  console.log(`app listening on post ${PORT}`);
});
