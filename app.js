alert ('Welcome to the hat shop! Please answer the following questions for a personalized shopping experience'); 

function getName(){
  let userName = prompt('What is your name (dont leave blank!)');
  return userName;
}

function greetUser(name){
  if(name == ''){
    name = prompt('please tell me your name :)');
  }
  document.write('Welcome ' + name + '!');
}

greetUser(userName);


function sports(){
  let sports2 = prompt ('Do you like sports (yes/no)?');
  return sports2;
}

function sports2(answer){
  if (sports == 'yes'){
    document.write(' Since you like sports');
  } else {
    document.write(' Since you do not like sports');
  }
}

sports2(likeSports);


function noCap(){
  let yesNo = prompt ('Do you know what "no cap" means (yes/no)?');
  return yesNo;
}

function noCap2(){
    if (noCap == 'yes'){
    document.write(' and you know what "no cap" means,');
  } else {
    document.write(' and you do not know what "no cap" means,');
  }
}

noCap2(likeCap);


function recommendation (){
  if (sports === noCap){
    document.write(' we recommend baseball hats!');
  } else if (sports !== noCap) {
    document.write(' we recommend fishing hats!');
  } else {
    document.write(' we recommend bowler hats!');
  }
}