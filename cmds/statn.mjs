export default {
	cmd: 'statn',
	help: 'statn <args> - Runs tail in the base shell',
	async script(args, ufo, tools){
		const {fs} = tools;
		console.log(fs.statSync(args[0]));
	}
}