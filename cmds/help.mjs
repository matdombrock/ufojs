export default {
	cmd: 'help',
	help: 'help <cmd|*> - Shows command help',
	script: (args, ufo, tools)=>{
    const {chalk} = tools;
      let cmd = args[0];
      if(cmd = "*"){
        for(let [key,data] of Object.entries(ufo.cmds)){
          console.log();
          console.log(chalk.greenBright(key));
          console.log(data.help);
        }
        return;
      }
      for(let [key, val] of Object.entries(ufo.aka)){
        if(key === cmd){
          cmd = val;
          break;
        }
      }
      console.log(ufo.cmds[cmd] ? ufo.cmds[cmd].help : 
        'cmd: '+ args[0] + ' not found \r\n' + ufo.cmds['help'].help
      );
    }
}