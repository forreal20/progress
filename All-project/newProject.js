  let gainedDollar = 3;
  let lostDollar = 50;

  const myName= 'Faridy';
  const myCity= 'Tanga';

            gainedDollar ++;
            lostDollar --;

            console.log(gainedDollar);
            console.log(lostDollar); 
    
            console.log(`My name is ${myName}.My favorite city is ${myCity}.`);
            
let isLocked = false;
isLocked ? 
  console.log('You will need a key to open the door.'): 
  console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? 
  console.log('Correct!'):
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? 
  console.log('I love that!') :
  console.log("I don't love that!");
                                
  let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place' :
  console.log('You get the gold medal!');
  break;
  case 'second place' :
  console.log('You get the silver medal!');
  break;
  case 'third place' :
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
}
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('wash dishes', 'do laundry');
console.log(chores);
chores.pop();
console.log(chores);
chores.shift();
console.log(chores);
chores.unshift('take out trash');
console.log(chores);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.splice(4,1,'avocado','grapes');
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr) {
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);

const removeElement = newArr => {
  newArr.pop();
}
removeElement(concept);
console.log(concept);

let numberClusters = [[1,2], [3,4], [5,6]];
console.log(numberClusters[2][1]);