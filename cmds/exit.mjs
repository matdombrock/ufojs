export default {
	cmd: 'exit',
	help: 'exit - Exits ufo',
	async script(args){
		console.log('Goodbye!');
		process.exit();
	}
}