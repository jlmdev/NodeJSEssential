// Lists the process id and version of node being used
// console.log(`The process id is: ${process.pid}`)
// console.log(`The node version is: ${process.versions.node}`);

// Lists the process argument variables to the terminal
// console.log(process.argv);

// Uses arguments passed to give first and last names
// const [ , , firstName, lastName] = process.argv;

// console.log(`Your name is ${firstName} ${lastName}`);

// flags
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);