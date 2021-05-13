import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Please enter your phrase:', function (phrase) {
  let checkPalindrome = phrase.replace(/ /g, '').split('').reverse().join('');
  if (phrase.replace(/ /g, '') === checkPalindrome) {
    console.log(`${phrase} is a palindrome`);
  } else {
    console.log(`${phrase} is not a palindrome`);
  }
  rl.close();
});
