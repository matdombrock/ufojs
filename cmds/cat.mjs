import {$} from 'zx';
export default {
	cmd: 'cat',
	help: 'cat <args> - Runs cat in the base shell',
	async script(args){
		await $`cat ${args.join(" ")}`;
	}
}