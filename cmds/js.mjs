export default {
	cmd: 'js',
	help: 'js-v <script> - Executes JS',
	async script(args){
		console.log(eval(args.join(" ")));
	}
}