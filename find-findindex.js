/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {

  return usersArray.find(function(UN){
return UN.username === username //accessing the username key of the UN object arr
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let removeIdx = usersArray.findIndex(function(UN){
return UN.username === username; // finding the index for the username we want to remove by matching it to the username we put in and assigning that index to variable removeIdx
  })

  if (removeIdx === -1) { // if we are not able to find the inputted username return -1
    return; 
  }
 
  return usersArray.splice(removeIdx,1)[0];// we are using splice to remove the value in the removeIdx and passing in 1 to show we are only removing 1 index (that index)
  // [0] is referring to the one index in the array as splice reutrns the removed index.
}
