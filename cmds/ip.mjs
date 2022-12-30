import axios from 'axios';
import os from 'os';
export default {
	cmd: 'ip',
	help: 'ip <local|remote> - Returns IP info',
	async script(args){
		if(args[0]==='local'){
			const interfaces = os.networkInterfaces();
			let addresses = [];
			for (let k in interfaces) {
			    for (let k2 in interfaces[k]) {
			        const address = interfaces[k][k2];
			        if (address.family === 'IPv4' && !address.internal) {
			            addresses.push(address);
			        }
			    }
			}

			console.log(addresses);
		}
		else{
			const res = await axios('https://api.ipify.org?format=json');
			console.log(res.data.ip);
		}
	}
};