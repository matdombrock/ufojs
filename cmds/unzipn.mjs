export default {
	cmd: 'unzipn',
	help: 'unzipn <zipPath> <outPath> <overwrite> - Unzips a file using JS',
	script(args, ufo, tools){
		const {zip} = tools;
        const zipPath = args[0];
        if(!zipPath){
            console.log('ERR: Must specificy zip path');
            return;
        }
        const outPath = args[1] || '.';
        const overwrite = args[2] || false;
        let zipFile = new zip(zipPath);
        zipFile.extractAllTo(/*target path*/ outPath, /*overwrite*/ overwrite);
	}
}