import fs from "node:fs/promises";

export const readFile = async (path: string)  => {
  try {
    return await fs.readFile(path, {encoding: "utf8"})
  } catch (err) {
    console.error(err);
    return 'Error reading file';
  }
}