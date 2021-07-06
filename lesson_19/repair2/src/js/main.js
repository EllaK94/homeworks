var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

//Отсеживаем кнопку с идентификатором button - 
// и по клику запускаем функцию
button.addEventListener('click', function() {
  // у идентификатора modal в список классов 
  // добавляем новый класс modal_active
  modal.classList.add('modal_active'); 
  // по прошествии 5 секунд удаляем класс modal_active
  // это автоматически закрывает всплывающее окно
  setTimeout(() => {
  modal.classList.remove('modal_active');
  }, 5000);
});

// позволяет нажать на крест и закрыть окно вручную
close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});