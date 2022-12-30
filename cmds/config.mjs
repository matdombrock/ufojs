export default {
	cmd: 'config',
	help: 'config - Returns a the config file',
	async script(args, ufo, tools){
		console.log(JSON.stringify(ufo.config,null,2));
	}
}