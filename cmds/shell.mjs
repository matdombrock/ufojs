import {$} from 'zx';
export default {
	cmd: 'shell',
	help: 'shell <ps|bash|ubuntu|path> - Sets and/or returns the name of your current shell',
	async script(args, ufo, tools){
		if(args[0]==="ps" || args[0]==="powershell"){
			args[0] = 'C:/WINDOWS/SYSTEM32/WINDOWSPOWERSHELL/V1.0/powershell';
		}
		if(args[0]==="bash"){
			args[0] = 'C:/WINDOWS/SYSTEM32/bash';
		}
		if(args[0]==="ubuntu"){
			args[0] = ufo.homeDir+'/AppData/Local/Microsoft/WindowsApps/ubuntu';
		}
		if(args[0]){
			$.shell = args[0];
		}
		console.log($.shell);
	}
}