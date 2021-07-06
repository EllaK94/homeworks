$(document).ready(function () { // Проверка полной загрузки html-документа
  var button = $('#button'); // Обьявляем переменные
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() { // Отслеживает клик по конкретной кнопке
    modal.addClass('modal_active'); // Добавляет класс модальному окну, если был клик
  });

  close.on('click', function() { // Отслеживает клик по крестику
    modal.removeClass('modal_active') // Удаляет класс у модального окна, если был клик по крестику
  });
});