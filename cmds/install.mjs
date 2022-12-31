export default {
	cmd: 'install',
	help: 'install https://<url>.zip - Installs scripts from a remote zip file',
	async script(args, ufo, tools){
		const {cd, $, fs, anzip, axios} = tools;

		let zipo;
		if(args[0] === 'examples'){
			args[0] = 'https://github.com/matdombrock/ufojs-examples/archive/refs/heads/master.zip';
		}
		if(args[0]){
	        const res = await axios.get(args[0],{responseType: 'arraybuffer'});
	        fs.writeFileSync(ufo.ufoDir+'/temp.zip', res.data);
	        zipo = await anzip(ufo.ufoDir+'/temp.zip', {outputPath: ufo.ufoDir});
	    }
		const installDir = zipo ? ufo.ufoDir + zipo.files[0].directory : ufoDir;
		console.log('Installing in: '+installDir);
		cd(installDir);
		if(fs.existsSync('package.json')){
			await $`npm install`;
			await $`npm list`;
		}
		console.log('installed');
	}
}