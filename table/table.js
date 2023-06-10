"use strict"
let table = document.getElementById("table");
function myFunction() {
  var value = document.getElementById("select").value;
  var newHTML = "";
  for (i = 0; i < value; i++) {
    newHTML += "<tr>";
    for (j = 0; j < value; j++) {
      if (i == j || i + j == value - 1) {
        newHTML +=
          '<td style="width: 50px; height: 50px; background-color: black;"></td>';
      } else {
        newHTML +=
          '<td style="width: 50px; height: 50px; background-color: turquoise;"></td>';
      }
    }
    newHTML += "</tr>";
  }
  table.innerHTML = newHTML;
}