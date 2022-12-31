#! /usr/bin/env node

import os from "os";
import path from "path";

import { $, argv, cd, chalk, echo, fs, question, fetch } from "zx";

import axios from 'axios';
import zip  from 'adm-zip';

import prompt from "./util/prompt.mjs";
import searchDirectory from './util/searchDirectory.mjs';
import verifyUFO from './util/verifyUFO.mjs';

const platform = process.platform;
const homeDir = os.homedir();
const ufoDir = homeDir+'/.ufo/';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let running = true;

let cmds = {};
let aka = {};
let config = {};

function didYouMean(badCmd){
  badCmd.toLowerCase();
  let likely = [];
  for(const cmd of Object.keys(cmds)){
    let isLikely = false;
    if(badCmd.includes(cmd)){
      isLikely = true;
    }
    if(cmd.includes(badCmd)){
      isLikely = true;
    }
    if(isLikely){
      likely.push(cmd);
    }
  }
  for(const cmd of Object.keys(aka)){
    let isLikely = false;
    if(badCmd.includes(cmd)){
      isLikely = true;
    }
    if(cmd.includes(badCmd)){
      isLikely = true;
    }
    if(isLikely){
      likely.push(cmd);
    }
  }
  return likely;
}

function registerCmd(cmdObj){
	const cmd = cmdObj.cmd;
	if(!cmd){
		console.log('Missing cmd');
		console.log(cmdObj);
	}
	const script = cmdObj.script;
	const help = cmdObj.help;
	cmds[cmd] = {
		script: script,
		help: help || 'No help provided for this command'
	};
}

async function registerConfig(){
	let ct = {};
	if(fs.existsSync(ufoDir+'ufocfg.json')){
		ct = JSON.parse(fs.readFileSync(ufoDir+'ufocfg.json')) || {};
	}
	config = {
		prompt: ct.prompt || '🪐',//🤷
		showWelcome: ct.showWelcome || true,
		welcomeMsg: ct.welcomeMsg || '🛸👽UFO👽🛸',
		loadCore: ct.loadCore || true,
		loadUser: ct.loadUser || true,
	};
}

async function registerCore(){
	let stockCmds = fs.readdirSync(__dirname+'/cmds/');
	for(let cmd of stockCmds){
		//console.log(cmd);
		const x = await import('file://'+__dirname+'/cmds/'+cmd);
		registerCmd(x.default);
	}
}

async function registerUser(){

	if(!fs.existsSync(ufoDir)){
		console.log('No user directory at ~/.ufo');
		return;
	}
	const fileList = searchDirectory(ufoDir);
	for(let file of fileList){
		if(file.includes('aka.json')){
	        const newAKA = fs.readFileSync(file);
	        const akaJSON = JSON.parse(newAKA);
	        aka = {...akaJSON,...aka};
	    }
		if(!verifyUFO(file)){
			continue;
		}
		//console.log('Importing Script');
		//console.log(file);
		const x = await import('file://'+file);
		registerCmd(x.default);
	}
}

async function main(){
	if(!fs.existsSync(ufoDir)){
    	fs.mkdirSync(ufoDir, true);
    	console.log('Created new directory: '+ufoDir);
  	}
  	registerConfig();
  	if(config.loadCore){
  		await registerCore();
  	}
  	if(config.loadUser){
  		await registerUser();
  	}
	// await registerCore();
	// await registerUser();
	
	let oneOff = '';
	if(argv._[0]){
		oneOff = argv._.join(" ");
	}

	if(config.showWelcome && !oneOff){ 
		console.log();
		console.log(chalk.greenBright(config.welcomeMsg));//🛸👽🛸🪐🔫👽👾😱🌍☄️️🌠
		console.log();
	}
	while(running){
		let input;
		if(oneOff){
			input = oneOff;
		}
		else{
			input = await prompt(config.prompt+" ");
		} 
		let args = input.split(" ");
	    let cmd = args[0];
	    args.shift();
	    for(let [key, val] of Object.entries(aka)){
	      if(key === cmd){
	        cmd = val;
	        break;
	      }
	    }
	    // Check empty
	    if(cmd === ""){
	    	continue;
	    }

	    if(cmd === "reload"){
	    	main();
	    	return;
	    }

		const targetCmd = cmds[cmd];

		if(targetCmd){
			const ufo = {
				cmds,
				aka,
				config,
				homeDir,
				ufoDir,
				platform
			};
			const tools = {
				$, argv, cd, chalk, fs, question, fetch, echo
				prompt,
				axios,
				zip,
				os,
				path
			}
			try{
				await targetCmd.script(args, ufo, tools);
			}
			catch(err){
				console.log('Script Error: '+err);
			}
		}
		else{
			console.log('Unknown CMD: '+cmd);
			const likely = didYouMean(cmd);
		    if(likely.length > 0){
		        console.log('Maybe you mean: ');
		        console.log(likely.sort());
		    }
		}
		if(oneOff!==''){
			running = false;
			process.exit();
		}
	}
}
main();
