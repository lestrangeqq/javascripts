//Вопросы

let x = [{
    q: 'hello',
    a1: 'ye',
    a2: 'naw',
    right: 'a1'
  },

  {
    q: 'hello2',
    a1: 'ye2',
    a2: 'naw2',
    right: 'a2'
  }
];

//Вопросы: конец.

//Получаем рандомный вопрос

let qRandom = x[Math.floor(Math.random() * x.length)];
let qNumber = x.indexOf(qRandom);

//HTML

let qDesc = document.getElementById('desc');
let answer1 = document.getElementById('a1');
let answer2 = document.getElementById('a2');

qDesc.innerHTML = x[qNumber].q;
answer1.innerHTML = x[qNumber].a1;
answer2.innerHTML = x[qNumber].a2;
