import * as _ from "lodash";

async function hello() {
    return 'world';
}
//------------------------------//
//IMPLICITLY TYPED: DECLARED AS NUMBER ALLOWS TYPESCRIPT TO KNOW WHAT IT IS
//------------------------------//

//it is "automatically inferred"
let lucky = 23;
//implicitly typed - declared number allows it to be automatically inferred 

//////// lucky = '23'; 
// can't do this - it's a number, not a string! NAUGHTY

//but if you go:
let unlucky: any = 13;

//you can go:
unlucky: 'pancakes';

console.log('unlucky is now:', unlucky)

//------------------------------//
//EXPLICITLY TYPED: no variable type yet - don't know what we're gonna be!
//------------------------------//

let party; //automatically 'any' type because not assigned anything
party = 5; //fine
party = 'pants'; //fine

const awesome = (incomingArray : string[] | number[] ) => { 

    let array = [incomingArray]

    for (let i = 0; i < incomingArray.length; i++) {
        console.log('next up!:', incomingArray[i]);
    }
}


awesome([1, 2, 5, 9, 3, 6]);

console.log('and now a mixture!');

awesome(['barf', 'pancakes', 'yes', 'no', 'true']);