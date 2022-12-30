export default {
	cmd: 'status',
	help: 'status https://<url> - Returns the status of a website',
	async script(args, env, tools){
		const {axios} = tools;
		if(!args[0].includes('http')){
			args[0] = 'https://'+args[0];
			console.log(args[0]);
		}
		const res = await axios.get(args[0] || 'https://example.com');
		console.log(res.status);
	}
}