var num = prompt('Введите число от 1 до 200?');
var myTxt = new Array(
    "Да вы просто визунчик!",
    "Вы победили!",
    "Вы угадали!",
    "Вам очень повезло!"
);

randnm = Math.round(Math.random() * (myTxt.length - 1));

if (num == 18 || num == 111 || num == 183 || num == 50 || num == 15 || num == 7 || num == 190) {
    alert(myTxt[randnm]);
} else if (num > 200) {
    alert('Вы ввели число больше 200!');
} else if (num < 1) {
    alert('Вы ввели число меньше одного.');
} else if (num == '') {
    alert('Вы не ввели число!');
} else {
    alert('Вы проиграли.');
};