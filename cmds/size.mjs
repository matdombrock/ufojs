export default {
	cmd: 'size',
	help: 'size <b|kb|mb|gb> - Returns the file size',
	async script(args, ufo, tools){
		const {fs} = tools;
		const stat = fs.statSync(args[0]);
		const unit = args[1] || 'mb';
		let div = 1;
		switch(unit){
			case 'b':
				div=1;
				break;
			case 'kb':
				div=1024;
				break;
			case 'mb':
				div=1024*1024;
				break;
			case 'gb':
				div=1024*1024*1024;
				break;
		}
		
		console.log((stat.size/div).toFixed(2)+unit);
	}
}