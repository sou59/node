const http = require("http");
const fs = require('file-system');

// let movieA = fs.readFileSync("./movieA.txt", "utf8");

// fs.writeFileSync("./movieA.txt ", movieA + " I love action movies", 'utf8');

// fs.rename('./movieA.txt', 'babyDriver.txt', (err) => {
//     if(err) throw err;
//     console.log("Your new file is babyDriver.txt");
// });

fs.unlink('./movieC.txt', (err) => {
    if (err) throw err;
    console.log('./movieC.txt was deleted');
  });