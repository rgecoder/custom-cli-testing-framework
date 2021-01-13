#!/usr/bin/env node

console.log("Running test");
const Runner = require("./runner");
const runner = new Runner();

//helper fn for async/await
const run = async () => {
  await runner.collectFiles(process.cwd()); //current working dir
  console.log(runner.testFiles);
};

run();
