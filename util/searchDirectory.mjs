import fs from 'fs';
import path from 'path';
function searchDirectory(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
  const filePath = path.join(dir, file);
  const fileStat = fs.lstatSync(filePath);

  if (fileStat.isDirectory()) {
      // Recursively search the subdirectory
      searchDirectory(filePath, fileList);
    } else {
      // Add the file to the list
      fileList.push(path.resolve(filePath));
    }
  });
  return fileList;
}

export default searchDirectory;