export default {
	cmd: 'get',
	help: 'get https://<url> <prop|all>(optional) - Returns the response of an HTTP GET request',
	async script(args, env, tools){
		const { axios} = tools;
		const res = await axios.get(args[0] || 'https://example.com');
		if(res.status === 200){
			const prop = args[1];
			if(prop === 'all'){
				console.log(res);
			}
			else if(prop){
				console.log(res[prop]);
			}
			else{
				console.log(res.data);//JSON.stringify(res,null,2)
			}
		}
		else{
			console.log('Could not get response');
		}
	}
}