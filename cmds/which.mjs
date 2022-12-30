import {$} from 'zx';
export default {
	cmd: 'which',
	help: 'which <args> - Runs which in the base shell',
	async script(args){
		await $`which ${args}`;
	}
}