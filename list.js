const fs = require ("fs");

console.log("started reading files");
fs.readdir("./", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("complete");
  console.log(files);
});

