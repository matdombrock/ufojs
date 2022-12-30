import {cd} from 'zx';
export default {
	cmd: 'cd',
	help: 'cd <dir> - Changes the working directory',
	async script(args){
		cd(args[0]);
	}
}