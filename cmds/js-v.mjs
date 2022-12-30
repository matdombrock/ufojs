export default {
	cmd: 'js-v',
	help: 'js-v <script> - Executes JS in verbose mode',
	async script(args){
		console.log("In:");
		console.log(args.join(" "));
		console.log("Out:");
		console.log(eval(args.join(" ")));
	}
}