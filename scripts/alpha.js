// function play(){
//     const add = document.getElementById('home');
//    add.classList.add('hidden');

//    const add2 = document.getElementById('play-ground');
//    add2.classList.remove('hidden');
    
// }


function handleButonPress(event){
  const playerPressed = event.key;
  console.log('player pressed',playerPressed);

  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet =currentAlphabetElement.innerHTML; 
  const expectedKey = currentAlphabet.toLowerCase();
  console.log(playerPressed,expectedKey);

  if(playerPressed === expectedKey){
    console.log('you get a point');
    
  

    
    addBackgroundColorById(expectedKey);
    continueGame();
  }
  else{
    console.log('you lost a life');
  }

}

document.addEventListener('keyup',handleButonPress)



function continueGame(){
  const alphabet= getRandomAlphabet();
  // console.log('your random alphabet',alphabet);
        const currentAlphabetElement = document.getElementById('current-alphabet');
        currentAlphabetElement.innerText = alphabet;

        addBackgroundColorById(alphabet);

}


function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}