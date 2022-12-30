export default {
	cmd: 'platform',
	help: 'platform - Returns your current platform',
	async script(args, ufo){
		console.log(ufo.platform);
	}
}