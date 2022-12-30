import {$} from 'zx';
export default {
	cmd: 'tail',
	help: 'tail <args> - Runs tail in the base shell',
	async script(args){
		await $`tail ${args}`;
	}
}