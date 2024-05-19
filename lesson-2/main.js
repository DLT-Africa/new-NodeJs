const fs = require("fs");
const path = require("path");

// fs.readFile('./files/open.txt', 'utf8', (err, data) => {
//     if(err) throw err
//     console.log(data)
// // })

// fs.readFile(path.join(__dirname, "files", "open.txt"), 'utf8', (err, data) => {
//     if(err) throw err
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname, "files", "late.txt"),"Omo we always late during Team lead class the guy get problem ", 'utf8', (err, data) => {
//     if(err) throw err
//     console.log(data)

//     fs.appendFile(path.join(__dirname, "files", "late.txt"),"\n\nGuys remain async put your mind together for it", 'utf8', (err, data) => {
//         if(err) throw err
//         console.log('folow follow')
//     })
// })

// fs.writeFile(
//   path.join(__dirname, "files", "open.txt"),
//   "Yoo we are moving",
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log("adding more text");

//     fs.appendFile(
//       path.join(__dirname, "files", "open.txt"),
//       "\n\n\n\nClosing period please",
//       (err, data) => {
//         if (err) throw err;
//         console.log("append text");

//         fs.rename(
//           path.join(__dirname, "files", "open.txt"),
//           path.join(__dirname, "files", "gig.txt"),
//           (err, data) => {
//             if (err) throw err;
//             console.log("name change");
//           }
//         );
//       }
//     );
//   }
// );

fs.writeFile(
  "server.js",
  `const fsPromises = require("fs").promises;`,
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("File created!");

    fs.appendFile("server.js", `\nconst path = require("path")`, "utf8", (err) => {
      if (err) throw err;
      console.log("Content added!");
    });
  }
);

console.log("Zainab");

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error :${err}`);
  process.exit(1);
});
