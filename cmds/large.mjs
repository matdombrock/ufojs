import fs from 'fs';
import path from 'path';

export default {
	cmd: 'large',
	help: 'large <dir> <n> - Find the n largest files',
	async script(args, env, tools){

		if(!args[0]){
			console.log('ERR: Must specify a directory');
			return;
		}
		const directory = args[0];
		const size = args[1] || 10;

		const getLargestFiles = dir => {
		  // Get an array of all files in the directory
		  const files = fs.readdirSync(dir);

		  // Sort the files by size in descending order
		  const sortedFiles = files
		    .map(file => {
		      const filePath = path.join(dir, file);
		      return {
		        name: filePath,
		        size: fs.statSync(filePath).size
		      };
		    })
		    .sort((a, b) => b.size - a.size);

		  // Get the 10 largest files
		  const largestFiles = sortedFiles.slice(0, size);

		  // Recursively search for the largest files in subdirectories
		  const subdirLargestFiles = files
		    .filter(file => fs.statSync(path.join(dir, file)).isDirectory())
		    .map(subdir => getLargestFiles(path.join(dir, subdir)))
		    .reduce((allLargestFiles, subdirLargestFiles) => {
		      return allLargestFiles.concat(subdirLargestFiles);
		    }, []);

		  return largestFiles.concat(subdirLargestFiles);
		};

		try {
		  // Find the largest files in the given directory and all its subdirectories
		  const largestFiles = getLargestFiles(directory);

		  // Sort the files by size in descending order
		  const sortedLargestFiles = largestFiles.sort((a, b) => b.size - a.size);

		  // Get the 10 largest files
		  const top10LargestFiles = sortedLargestFiles.slice(0, size);

		  // Print the file names and sizes
		  top10LargestFiles.forEach(file => {
		    console.log(`${file.name}: ${file.size} bytes`);
		  });
		} catch (err) {
		  console.error(`An error occurred: ${err}`);
		}
		
	}
}