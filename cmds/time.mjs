export default {
	cmd: 'time',
	help: 'time <human|unix> - Displays the current system time',
	script(args, env, tools){
		switch(args[0]){
			case "unix":
				console.log(Date.now());
				break;
			case "human":
				console.log(Date.now().toTimeString());
				break;
			default:
				console.log(new Date().toTimeString());
				break;
		}
		
	}
}