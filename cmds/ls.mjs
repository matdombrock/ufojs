import {$} from 'zx';
export default {
	cmd: 'ls',
	help: 'ls <args> - Runs ls in the base shell',
	async script(args){
		await $`ls ${args}`;
	}
}