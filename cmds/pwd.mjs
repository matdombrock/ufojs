import {$} from 'zx';
export default {
	cmd: 'pwd',
	help: 'pwd <args> - Runs pwd in the base shell',
	async script(args){
		await $`pwd ${args}`;
	}
}