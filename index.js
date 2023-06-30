function isPalindrome(word) {
  // Write your algorithm here
    let reversedWord = word.split("").reverse().join("")
    
    if (reversedWord === word) {
      return true;
    } else{
      return false;
    }
  }

/*
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  This code defines a function isPalindrome that checks whether a given word is a palindrome. It uses the split, reverse, and join methods to reverse the characters in the word and store it in the reversedWord variable. It then compares reversedWord with the original word and returns true if they are equal (i.e., the word is a palindrome), and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
