import {$} from 'zx';
export default {
	cmd: 'touch',
	help: 'touch <args> - Runs touch in the base shell',
	async script(args){
		await $`touch ${args}`;
	}
}