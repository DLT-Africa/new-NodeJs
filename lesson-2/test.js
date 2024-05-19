const fsPromises = require("fs").promises;
const path = require("path");

const test = async () => {
  try {
    const charlie = await fsPromises.readFile(
      path.join(__dirname, "files", "dlt.txt"),
      "utf8"
    );
    console.log(charlie);

    await fsPromises.unlink(path.join(__dirname, "files", "dlt.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "africa.txt"),
      charlie
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "africa.txt"),
      "\nThis is Africa!",
      "utf8"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "africa.txt"),
      path.join(__dirname, "files", "nigeria.txt")
    );
 
    const oscar = await fsPromises.readFile(
      path.join(__dirname, "files", "nigeria.txt"),
      "utf8"
    );
    console.log(oscar);

    await fsPromises.unlink(path.join(__dirname, "files", "nigeria.txt"));
  } catch (error) {
    console.error(error);
  }
};

test();
