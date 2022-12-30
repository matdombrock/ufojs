export default {
	cmd: 'lsn',
	help: 'lsn <args> - Runs ls in node',
	async script(args, ufo, tools){
		const {fs} = tools;
		for(let item of fs.readdirSync(args[0] || '.')){
			console.log(item);
		}
	}
}