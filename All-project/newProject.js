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