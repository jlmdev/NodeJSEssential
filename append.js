// import core module fs (file system)
const fs = require("fs");

// import local file: colors.json in the assets folder
const colorData = require("./assets/colors.json");

// append each of the colors listed in the colors.json file to a new file: colors.md
colorData.colorList.forEach(color => {
  fs.appendFile("./storage-files/colors.md", `${color.color}: ${color.hex} \n`, err => {
    if (err) {
      throw err;
    }
  });
});