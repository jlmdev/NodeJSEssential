const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.md", "UTF-8");
const readStream = fs.createReadStream("./assets/lorem-ipsum.md", "UTF-8");
readStream.on("data", data => {
  writeStream.write(data);
});
