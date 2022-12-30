import {$} from 'zx';
export default {
	cmd: 'rm',
	help: 'rm <args> - Runs rm in the base shell',
	async script(args){
		await $`rm ${args}`;
	}
}