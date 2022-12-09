function reverse(word){
  //'abc'=>'cba'
  // const wordArray =word.split("");
  // const reversedWordArray =wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");

}


function isPalindrome(word) {
  
  // Write your algorithm here
  const reversedWord = reverse(word);

  return word === reversedWord;
}
/* 
  Add your pseudocode here
*/
// reverse the input string

// if (word === reversedWord){
//   return true
// }else{
//   return false
// }

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

}





module.exports = isPalindrome;
