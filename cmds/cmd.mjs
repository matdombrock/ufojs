export default {
	cmd: 'cmd',
	help: 'cmd - Returns a the cmd list',
	script(args, ufo){
		console.log(Object.keys(ufo.cmds));
	}
}