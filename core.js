// const path = require("path");

// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

// console.log(dirUploads);

const path = require("path");
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());