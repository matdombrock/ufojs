import checkDiskSpace from 'check-disk-space';
export default {
	cmd: 'space',
	usage: 'space <dir> - Check the drive capacity',
	async script(args, ufo, tools){
		args[0] = args[0] || ufo.homeDir;
		const diskSpace = await checkDiskSpace(args[0]);
		//console.log(diskSpace);
		const free = (diskSpace.free / 1e+9).toFixed(2);
		const size = (diskSpace.size / 1e+9).toFixed(2);
		const used = (((diskSpace.size - diskSpace.free) / diskSpace.size) * 100).toFixed(2);
		console.log('Used: '+used+ '%');
		console.log('Free: '+free+'gb');
		console.log('Size: '+size+'gb');
	}
}