$(document).ready( function () {
  $('button').click(function () {
    var message = $('input').val();

    var source = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
      'classe' : 'sent',
      'text' : message,
      'time' : getTime()
    };
    var html = template(context);
    $('.chat_messages').append(html);
    $('input').val('');

    setTimeout(function () {
      var reply = 'OK!'
      var source = document.getElementById("template").innerHTML;
      var template = Handlebars.compile(source);
      var context = {
        'classe' : 'received',
        'text' : reply,
        'time' : getTime()
      };
      var html = template(context);
      $('.chat_messages').append(html);
    }, 2000);
  });

});

function getTime() {
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;
  return time;
}
function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
