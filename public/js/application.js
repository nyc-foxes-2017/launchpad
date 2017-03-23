$(document).ready(function(){
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
  }
  var rowNum = 1;
  var cellNum = 1;
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
    var match = $(this).parent().prop("id");
      current.addClass("active");
      setTimeout(function(){
        current.removeClass("active");
        }, 150);
  });
  $(document).on("keyup", function(event){
    event.preventDefault();
    debugger
  });
})