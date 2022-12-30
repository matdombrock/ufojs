import {$} from 'zx';
export default {
	cmd: 'shell',
	help: 'shell - Returns the name of your current shell',
	async script(args){
		console.log($.shell);
	}
}