function verifyUFO(fileName){
	const fileSplit = fileName.split('.');
	if(fileSplit[fileSplit.length - 1] !== 'mjs'){
		return false;
	}
	if(fileSplit[fileSplit.length - 2] !== 'ufo'){
		return false;
	}
	return true;
}
export default verifyUFO;