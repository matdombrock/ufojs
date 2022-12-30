import {$} from 'zx';
export default {
	cmd: 'stat',
	help: 'stat <args> - Runs stat in the base shell',
	async script(args){
		await $`stat ${args}`;
	}
}