import {$} from 'zx';
export default {
	cmd: 'ping',
	help: 'ping <args> - Runs ping in the base shell',
	async script(args){
		await $`ping ${args}`;
	}
}