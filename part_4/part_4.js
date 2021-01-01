/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log("PART 4");

const isABalancedString = (str) => {
  // WRITE YOUR CODE BELOW THIS LINE
  let [
    openSquareBracket,
    closeSquareBracket,
    openCurlyBracket,
    closeCurlyBracket,
    openParentheses,
    closeParentheses,
  ] = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "]") closeSquareBracket += 1;
    else if (str[i] === "[") openSquareBracket += 1;
    else if (str[i] === "(") openParentheses += 1;
    else if (str[i] === ")") closeParentheses += 1;
    else if (str[i] === "{") openCurlyBracket += 1;
    else closeCurlyBracket += 1;
  }
  if (
    openSquareBracket === closeSquareBracket &&
    openParentheses === closeParentheses &&
    openCurlyBracket === closeCurlyBracket
  ) {
    return "YES";
  }
  return "NO"
};

/*
Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
