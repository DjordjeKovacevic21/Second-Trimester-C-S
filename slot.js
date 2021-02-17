var spin = document.getElementById('spin');
var display1= document.getElementById('display1');
var display2= document.getElementById('display2');
var display3= document.getElementById('display3');
var random1 = 0;
var random2 = 0;
var random3 = 0;
var coinsEarned= document.getElementById('coinsEarned');
var coinsLeft= document.getElementById('coinsLeft');
var coins = 0;
var left = 100;

function getRandomNumber() {
  random1 = Math.floor(Math.random() * (9 - 1) + 1);
  random2 = Math.floor(Math.random() * (9 - 1) + 1);
  random3 = Math.floor(Math.random() * (9 - 1) + 1);
  display1.innerHTML = random1; 
  display2.innerHTML = random2;
  display3.innerHTML = random3;
	
if(random1 == random2){
coins = coins + 5;
coinsEarned.innerHTML = 'coins earned: '  + coins;
}


if(random2 == random3){
coins = coins + 5;
coinsEarned.innerHTML = 'coins earned: '  + coins;
}

if(random1 == random3){
coins = coins + 5;
coinsEarned.innerHTML = 'coins earned: '  + coins;
}

if(random1 == random2 && random2 == random3){
coins = coins + 10;
coinsEarned.innerHTML = 'coins earned: '  + coins;
}


if(random1 != random2 && random2 != random3 && random3 != random1){
left = left - 5;
coinsLeft.innerHTML = ' Coins Left : ' + left;
}

}
spin.addEventListener('click', getRandomNumber, false);


