// PROMPT
// This is very similar to question from zx 
// But keeps history
import readline from 'readline';
const rl = readline.createInterface({
	input: process.stdin, //or fileStream 
	output: process.stdout
});
function prompt(indicator="🍕 "){//Δ∞♇🍕Δ
  const answer = new Promise(resolve => {
    rl.question(indicator, resolve)
  });
  return answer;
}

export default prompt;