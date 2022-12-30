export default {
	cmd: 'clear',
	help: 'clear - Clears the terminal window',
	async script(args, ufo, tools){
		console.clear();
	}
}