import { getFileNameAndNumber } from "./utils";
import { csvFileReaderGennerator } from "./csv/csvFileReaderGennerator";

const [filename] = getFileNameAndNumber("./data/fake- 10000.csv",1);

let line = 1;
for (let object of csvFileReaderGennerator(filename)) {
  console.log(`[${line++} ${JSON.stringify(object)}]`);
}
console.log(`\n read complete`);
