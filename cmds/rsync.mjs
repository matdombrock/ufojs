import {$} from 'zx';
import shell from './shell.mjs';
export default {
	cmd: 'rsync',
	help: 'rsync <args> - Runs rsync in the base shell',
	async script(args, ufo, tools){
        if(ufo.platform === "win32"){
            console.log('Switching to ubuntu shell');
            const shellCache = $.shell;
            $.shell = ufo.homeDir+'/AppData/Local/Microsoft/WindowsApps/ubuntu';
            try{
                await $`rsync ${args}`;
            }
            catch(err){
                console.log(err);
            }
            console.log('Switching to default shell');
            $.shell = shellCache;
        }
        else{
            await $`rsync ${args}`;
        }
		
	}
}