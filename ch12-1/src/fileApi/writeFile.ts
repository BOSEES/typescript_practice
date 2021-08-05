import * as fs from "fs";

export const writeFile = (filename: string, data: any) : Promise<any> => {
  return new Promise((resolve, rejact) => {
    fs.writeFile(filename,data,"utf8",(error:Error) => {
      error ? rejact(error) : resolve(data);
    })
  })
}
