const fs = require("fs");

const readSTream = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const writeStream = fs.createWriteStream("./files/new-lorem.txt");


readSTream.pipe(writeStream)