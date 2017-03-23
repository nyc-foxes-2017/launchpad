var keyCodes = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    81: 9,
    87: 10,
    69: 11,
    82: 12,
    84: 13,
    89: 14,
    85: 15,
    73: 16,
    65: 17,
    83: 18,
    68: 19,
    70: 20,
    71: 21,
    72: 22,
    74: 23,
    75: 24,
    90: 25,
    88: 26,
    67: 27,
    86: 28,
    66: 29,
    78: 30,
    77: 31,
    188: 32
  };
var keyCodesAlt = {
    49: 33,
    50: 34,
    51: 35,
    52: 36,
    53: 37,
    54: 38,
    55: 39,
    56: 40,
    81: 41,
    87: 42,
    69: 43,
    82: 44,
    84: 45,
    89: 46,
    85: 47,
    73: 48,
    65: 49,
    83: 50,
    68: 51,
    70: 52,
    71: 53,
    72: 54,
    74: 55,
    75: 56,
    90: 57,
    88: 58,
    67: 59,
    86: 60,
    66: 61,
    78: 62,
    77: 63,
    188: 64
  };

var toggle = false;

$(document).ready(function(){
  var rowNum = 1;
  var cellNum = 1;
  var soundNum = 1;
  for (k = 0; k <  14; k++){
    var audioString = '<audio id="sound' + soundNum + '"><source src="/samples/consolidate/' + soundNum + '.wav">';
    $(".consolidate").append(audioString)
    soundNum++;
  };
  for (l = 15; l < 37 ; l++  ){
    var audioString = '<audio id="sound' + soundNum + '"><source src="/samples/crop/' + soundNum + '.wav">';
    $(".crop").append(audioString)
    soundNum++;
  };
  for (i = 0; i < 8; i++){
    var rowString = '<tr id="row' + rowNum + '">'
    $("#launchpad").append(rowString);
    rowNum++;
  };
  $("#launchpad").children().each(function(row){
    for (j = 0; j < 8; j++){
    var cellString = '<td id="cell' + cellNum + '"></td>'
    $(this).append(cellString);
    cellNum++
    }
  });
  $("#launchpad").on("click", "td" , function(event){
    event.preventDefault();
    var current = $(this);
    var num = current[0].id.match(/\d+/)[0]
    var sound = "sound" + num;
    var getSound = document.getElementById(sound)
    getSound.pause();
    getSound.currentTime = 0;
    getSound.play();
    current.addClass("active");
    setTimeout(function(){
      current.removeClass("active");
    }, 150);
  });
  $(document).on("keyup", function(event){
    event.preventDefault();

    if (event.keyCode === 16){
      return (toggle === true ? toggle = false : toggle = true);
    };
    if (toggle === false){
      var num = keyCodes[event.keyCode]
      var current = $('#cell' + num);
      var sound = "sound" + num;
      var getSound = document.getElementById(sound)
      getSound.pause();
      getSound.currentTime = 0;
      getSound.play();
      current.addClass("active");
      setTimeout(function(){
        current.removeClass("active");
        }, 150);
    } else {
      var num = keyCodesAlt[event.keyCode]
      var current = $('#cell' + num);
      var sound = "sound" + num;
      var getSound = document.getElementById(sound)
      getSound.pause();
      getSound.currentTime = 0;
      getSound.play();
      current.addClass("active");
      setTimeout(function(){
      current.removeClass("active");
      }, 200);
    }
  });
})