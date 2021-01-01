/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = (str) => {
  // WRITE YOUR CODE BELOW THIS LINE
  str =str.split("")
  for(let i =0; i < str.length; i++){
    
  }
  
};

/*
every bracket that we open should be closed to return YES otherwise it will show NO 
so let's cut it to small pieces
1- the code should check every single ele in the arr (for statement) 
2- after that, the code must catch the open bracket and check if there any close bracket that's the same 
3- i
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
