import {$} from 'zx';
export default {
	cmd: 'head',
	help: 'head <args> - Runs head in the base shell',
	async script(args){
		await $`head ${args}`;
	}
}