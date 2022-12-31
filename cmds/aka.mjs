export default {
	cmd: 'aka',
	help: 'aka - Returns a the aka list',
	async script(args, ufo, tools){
		console.log(ufo.aka.sort());
	}
}