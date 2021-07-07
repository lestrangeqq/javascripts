let x = [{
    q: 'hello',
    a1: 'ye',
    a2: 'naw'
  },

  {
    q: 'hello2',
    a1: 'ye2',
    a2: 'naw2'
  }
]

let qDesc = document.getElementById('desc');
let answer1 = document.getElementById('a1');
let answer2 = document.getElementById('a2');

qDesc.innerHTML = x[1].q;
answer1.innerHTML = x[1].a1;
answer2.innerHTML = x[1].a2;
