//Вопросы

let x = [{
    q: 'hello', //описание вопроса
    a1: 'ye',  //ответ 1
    a2: 'naw',  //ответ 2
    right: 'a1'  //правильный ответ
  },

  {
    q: 'hello2',
    a1: 'ye2',
    a2: 'naw2',
    right: 'a2'
  }
];

//Вопросы: конец.

//HTML

let buttonCheck = document.getElementById('check');

let qDesc = document.getElementById('desc');
let answer1 = document.getElementById('a1');
let answer2 = document.getElementById('a2');

answer1.addEventListener('click', chooseAnswer);
answer2.addEventListener('click', chooseAnswer);
buttonCheck.addEventListener('click', checkAnswer);

//Получаем рандомный вопрос

let qRandom = x[Math.floor(Math.random() * x.length)];
let qNumber = x.indexOf(qRandom);

//Рендерим рандомный вопрос

qDesc.innerHTML = x[qNumber].q;
answer1.innerHTML = x[qNumber].a1;
answer2.innerHTML = x[qNumber].a2;

//Принимаем выбранный пользователем вопрос

function chooseAnswer() {
  this.classList.toggle('chosen');
}


//Проверяем на правильность ответа

function checkAnswer() {
  //Объявляем переменные, в которые будет записываться какой ответ выбрал пользователь.
  let chosenAnswer1;
  let chosenAnswer2;
  
  //Если ответ первый - записываем в переменную chosenAnswer - a1. и т.д.
  if (answer1.classList.contains('chosen')) {
    chosenAnswer1 = 'a1';
  }
  if (answer2.classList.contains('chosen')) {
    chosenAnswer2 = 'a2';
  } 

  //Сравниваем данный пользователем ответ с тем, какой правильный ответ значится для данного вопроса.
  if ((chosenAnswer1 == x[qNumber].right) || (chosenAnswer2 == x[qNumber].right)) {
    console.log('true');
    //Сбрасываем содержимое переменных, в которых сохраняется выбранный пользователем ответ
    chosenAnswer1 = 0;
    chosenAnswer2 = 0;
  } else {
    console.log('false');
    chosenAnswer1 = 0;
    chosenAnswer2 = 0;
  }
}
