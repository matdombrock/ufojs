export default {
	cmd: 'download',
	help: 'download https://<url> <destination> - Downloads the URL contents to the destination',
	async script(args, env, tools){
		const {fs, axios} = tools;
		if(!args[1]){
			console.log('ERR: Must provide a destination');
			console.log('help:');
			console.log(this.help);
			return;
		}
		const res = await axios.get(args[0] || 'https://example.com');
		if(res.status === 200){
			const fileLoc = args[1];
			fs.writeFileSync(fileLoc, res.data);
			console.log('Wrote file to: '+fileLoc);
		}
		else{
			console.log('Could not download file');
		}
	}
}