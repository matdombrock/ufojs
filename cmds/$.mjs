import {$} from 'zx';
export default {
	cmd: '$',
	help: '$ <command> <args> - Runs a command in the base shell',
	async script(args){
		await $`${args}`;
	}
}