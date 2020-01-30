$(document).ready( function () {
  var studente = {
    'nome' : 'Emanuele',
    'cognome' : 'Correggia',
    'eta' : 33
  }
  console.log('primo milestone-->');
  for (var key in studente) {
    console.log(studente[key]);
    $('#primo_esercizio').append(studente[key] + ' ');
    // /primo metodo

  }
  // secondo metodo
  var source = document.getElementById("template").innerHTML;
  var template = Handlebars.compile(source);
  var context = {
    'nome' : studente.nome,
    'cognome' : studente.cognome,
    'eta' : studente.eta
  };
  var html = template(context);
  $('#primo_handlebarsjs').append(html);

// ----------------------------------------------------------------------------
  var studenti = [
    {
      'nome' : 'Emanuele',
      'cognome' : 'Correggia',
      'eta' : 33
    },
    {
      'nome' : 'Margherita',
      'cognome' : 'Marino',
      'eta' : 30
    },
    {
      'nome' : 'Giovanni',
      'cognome' : 'Correggia',
      'eta' : 4
    }
  ]
  console.log('secondo milestone-->');
  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + ' ' + studenti[i].cognome);
    $('#secondo_esercizio').append(studenti[i].nome + ' ' + studenti[i].cognome + '<br>');
    // secondo metodo
    var source = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
      'nome' : studenti[i].nome,
      'cognome' : studenti[i].cognome,
      'eta' : studenti[i].eta
    }
    var html = template(context);
    $('#secondo_handlebarsjs').append(html);
  }

  // -------------------------------------------------------------------------
  $('button').click(function () {
    var nuovoStudente = {
      'nome' : prompt('inserisci il nome:'),
      'cognome' : prompt('inserisci il cognome:'),
      'eta' : parseInt(prompt('inserisci l\'età:'))
    }
    studenti.push(nuovoStudente);
    for (var i = 0; i < studenti.length; i++) {
      $('#terzo_esercizio').append(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].eta + '<br>');
      // secondo metodo
      var source = document.getElementById("template").innerHTML;
      var template = Handlebars.compile(source);
      var context = {
        'nome' : studenti[i].nome,
        'cognome' : studenti[i].cognome,
        'eta' : studenti[i].eta
      }
      var html = template(context);
      $('#terzo_handlebarsjs').append(html);
    }
  });

});
