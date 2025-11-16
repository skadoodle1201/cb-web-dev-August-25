const fsPromise = require("fs/promises");

async function readThisFile() {
  try {
    const data = await fsPromise.readFile("test.txt");
    // If data not converted to string prints buffer data
    console.log(data.toString());
  } catch (error) {
    console.log(`Got an error trying to read the file: ${error.message}`);
  }
}

async function writeToThis() {
  try {
    await fsPromise.appendFile("test.txt", "\nNEW HELLO APPEND", { flag: "a" });
  } catch (error) {
    console.log(`Got an error trying to write the file: ${error.message}`);
  }
}
readThisFile();
writeToThis();
