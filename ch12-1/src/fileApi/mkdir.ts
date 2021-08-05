import mkdirp from "mkdirp";
import { fileExists } from "./fileExists";

export const mkdir = (dirname: string) : Promise<string> => {
  return new Promise(async (resolve,reject) => {
    const alreadyExists = await fileExists(dirname);
    return alreadyExists ? resolve(dirname) : mkdirp(dirname)
    .then(resolve)
    .catch(reject)
  })
}

