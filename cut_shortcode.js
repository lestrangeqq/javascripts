//скрипт удаляет шорткод [contents] из превью статей

var catchContents = document.querySelector('.home-feature'); //селектор где нужно найти и удалить шорткод

for (var i = 0; i < 9; i++) {
catchContents.innerHTML = catchContents.innerHTML.replace('[contents]', '');
}
