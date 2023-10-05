//In normal way

// function powerOf(x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// console.log(powerOf(2, 3));  // 2 * 2 * 2


//In recursion
function powerOf(x, n) {
    // if(n === 1){
    //     return x;
    // }
    // return x * powerOf(x, n-1);

    return n == 1 ? x : x * powerOf(x, n-1);
}
console.log(powerOf(2, 3)); 

//Advanced recursion

const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Manuel', 
            friends: [
                {
                    name: 'Chris',
                    friend: [
                        {
                            name: 'Hari'

                        },
                        {
                            name: 'Amillia'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Julia'
        }
    ]
}

//In this scenario we don't know how many levels of nesting we have here.
//if we want a function, print friends names, then we can't use a for loop here to loop through all
function getFriendNames(person) {
//  for(const friends of person.friends){
//     for(const friendsFriends of friends.friends){
//         for(cons)
//     }
//  }

//you cant know how many levels of nesting you will have,
//in this place using recursion

const collectedNames = [];

if(!person.friends) {
    return [];
}
 for(const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
 }
 return collectedNames;
}

console.log(getFriendNames(myself));



