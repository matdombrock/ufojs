import {$} from 'zx';
export default {
	cmd: 'mkdir',
	help: 'mkdir <args> - Runs mkdir in the base shell',
	async script(args){
		await $`mkdir ${args}`;
	}
}