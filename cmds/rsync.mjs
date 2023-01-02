import {$} from 'zx';
export default {
	cmd: 'rsync',
	help: 'rsync <args> - Runs rsync in the base shell',
	async script(args, ufo, tools){
        if(ufo.platform === "win32"){
            await $`ubuntu run rsync ${args}`;
        }
        else{
            await $`rsync ${args}`;
        }
		
	}
}