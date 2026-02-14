$("#btnWhil").click(whil);
$("#btnDoWhil").click(doWhil);
$("#btnFor").click(fo);

function whil() {
  var num = -50;
  $("#pMostrar").html("<br>" + "while");
  while (num <= 50) {
    $("#pMostrar").append(num + ", ");
    num++;
  }
}

function doWhil() {
  var num1 = -50;
  $("#pMostrar").html("<br>" + "dowhile");
  do {
    $("#pMostrar").append(num1 + ", ");
    num1++;
  } while (num1 <= 50);
}

function fo() {
  $("#pMostrar").html("<br>" + "for");
  for (var num2 = -50; num2 <= 50; num2++) {
    $("#pMostrar").append(num2 + ", ");
  }
}
