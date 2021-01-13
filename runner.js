const fs = require("fs");
const path = require("path");

//recursive file collection for my test files
class Runner {
  constructor() {
    this.testFiles = [];
  }

  //iterate through folders
  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);

    for (let file of files) {
      const filepath = path.join(targetPath, file); //root+file
      const stats = await fs.promises.lstat(filepath);

      if (stats.isFile() && file.includes(".test.js")) {
        this.testFiles.push({ name: filepath }); //{} with test files
      } else if (stats.isDirectory()) {
        const childFiles = await fs.promises.readdir(filepath);

        //join paths of all traversed sub directories
        files.push(...childFiles.map((f) => path.join(file, f))); //Breadth First Traversal push back in files
        
      }
    }
  }
}

module.exports = Runner;
